/*
  # Initial Schema Setup

  1. New Tables
    - `services`
      - `id` (uuid, primary key)
      - `name` (text)
      - `category` (text)
      - `description` (text)
      - `pricing` (jsonb)
      - `created_at` (timestamp)
    - `packages`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `services` (jsonb)
      - `scale` (text)
      - `total_price` (numeric)
      - `status` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create services table
CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  category text NOT NULL,
  description text NOT NULL,
  pricing jsonb NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create packages table
CREATE TABLE IF NOT EXISTS packages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  services jsonb NOT NULL,
  scale text NOT NULL,
  total_price numeric NOT NULL,
  status text NOT NULL DEFAULT 'draft',
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE packages ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Services are viewable by everyone"
  ON services
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Packages are viewable by owner"
  ON packages
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Packages can be created by authenticated users"
  ON packages
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Packages can be updated by owner"
  ON packages
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);