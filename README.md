# Service Tool

A comprehensive service customization platform featuring 33+ services across multiple categories, 150+ technology options with realistic pricing, and a dynamic customization wizard. Built with React + TypeScript frontend, FastAPI backend, and Supabase database.

## Features

- **Rich Service Catalog**: 33+ services across Individual, Startup, Small Business, and Enterprise scales
- **Dynamic Customization**: Choose from 150+ technology options across 11 categories
- **Realistic Pricing**: Market-based pricing that updates in real-time as options are selected
- **Industry-Specific Features**: Tailored options for 6+ different industries

## Prerequisites
- Docker Desktop (with Docker Engine & Compose) for containerized deployment
- Node.js and npm (v18+ recommended) for frontend development
- Python 3.11+ for backend development

## Local Development

### Frontend
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```
Visit http://localhost:3000

### Backend
```bash
# Navigate to backend directory
cd backend

# Install Python dependencies
pip install -r requirements.txt

# Start the FastAPI server with hot-reload
uvicorn main:app --reload
```
Visit http://localhost:8000/api/ for API documentation

### Supabase (Local)
```bash
# Start local Supabase service
docker-compose up -d supabase
# (Wait ~30s for DB to initialize)
```

Create environment files:
```bash
# Frontend .env (root)
echo "VITE_SUPABASE_URL=http://localhost:5432" >> .env
echo "VITE_SUPABASE_ANON_KEY=postgres" >> .env

# Backend .env (in backend directory)
cd backend
echo "DATABASE_URL=postgresql://postgres:postgres@localhost:5432/postgres" >> .env
echo "SUPABASE_URL=http://localhost:5432" >> .env
echo "SUPABASE_KEY=postgres" >> .env
```

## Deployment

### Frontend Deployment (GitHub Pages)

The frontend is automatically deployed to GitHub Pages when changes are pushed to the `production` branch via GitHub Actions workflow:

```bash
# Commit your changes
git add .
git commit -m "Your commit message"

# Push to production branch to trigger deployment
git push origin production
```

After successful deployment, the application will be available at: `https://[your-github-username].github.io/service-tool/`

### Backend Deployment

The backend can be deployed using Docker:

```bash
# Build backend Docker image
docker build -t service-tool-backend ./backend

# Run backend container
docker run -d -p 8000:8000 --name service-tool-backend service-tool-backend
```

Or deployed to a cloud provider that supports Python applications like:
- Heroku
- Google Cloud Run
- AWS Elastic Beanstalk

## Project Structure

### Frontend Structure

```
src/
├── components/       # React components including PackageBuilder wizard
├── data/             # Service data, tech stack options, and pricing
├── store/            # Zustand state management
├── pages/            # Page components
├── styles/           # CSS and styling
└── utils/            # Utility functions
```

### Backend Structure

```
backend/
├── api/             # API routes and endpoints
├── models/          # Data models and schemas
├── services/        # Business logic and services
├── db/              # Database connections and queries
└── utils/           # Utility functions
```

## Running the Complete Application

For the best experience, run both frontend and backend components simultaneously:

### Terminal 1 - Frontend
```bash
# From project root
npm install
npm run dev
```

### Terminal 2 - Backend
```bash
# From project root
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

### Access the application
- Frontend UI: http://localhost:3000
- Backend API: http://localhost:8000/api/
- API Documentation: http://localhost:8000/docs


## Docker Compose (Local)
```bash
# from repo root
echo "export DOCKERHUB_USERNAME=your_dockerhub_username" >> .env
echo "export IMAGE_TAG=latest" >> .env
export DOCKERHUB_USERNAME=your_dockerhub_username
export IMAGE_TAG=latest
docker-compose pull
docker-compose up --build -d
```
Visit http://localhost/ (frontend) and http://localhost:8000/api/ (backend)

## Production Deploy (CI/CD)
1. Push code to `production` branch:
   ```bash
git checkout -b production
git add .
git commit -m "chore: production deploy setup"
git push -u origin production
```  
2. In GitHub repo settings → Secrets → Actions, add:
   - **DOCKERHUB_USERNAME**
   - **DOCKERHUB_TOKEN**
   - **SUPABASE_URL**
   - **SUPABASE_KEY**
3. Ensure your self-hosted runner is online and has Docker & Compose installed.
4. On push to `production`, the `deploy.yml` workflow will:
   - Build & push images to Docker Hub
   - Deploy the frontend to GitHub Pages
   - Deploy the backend and Supabase services using Docker Compose
   - Run health checks to verify deployment success

## Recent Bugfixes

### Service Catalog UI
- Fixed service catalog display issues by correcting the root route in `App.tsx` to use `ServiceCatalogPage` component
- Updated `ServiceCatalogPage` component to properly use `getServicesByScale` function for service filtering
- Resolved type mismatch between different `Industry` type definitions in the codebase
- Added proper handling of null/undefined industry values
- Improved fallback logic when no services are found for a given business scale

### Blank Page After Service Build Start
- Added robust error handling to `getAvailableCustomizations` function
- Enhanced PackageBuilder component with comprehensive error handling
- Added validation for service ID and business scale
- Added detailed logging to trace execution flow
- Added proper error state handling with user-friendly messages

### TypeScript Improvements
- Added type assertions to resolve conflicts between different module type definitions
- Updated component props to handle nullable values properly
- Fixed service data access patterns to ensure proper type safety
   - Run `docker-compose pull && docker-compose up -d`

Enjoy your automated deploy pipeline!
