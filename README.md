# service-tool

## Prerequisites
- Docker Desktop (with Docker Engine & Compose)
- Node.js and npm (for local dev)
- Python 3.11+

## Local Development

### Frontend
```bash
npm install
npm run dev
```
Visit http://localhost:3000

### Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```
Visit http://localhost:8000/api/

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

# Backend .env
echo "SUPABASE_URL=http://localhost:5432" > backend/.env
echo "SUPABASE_KEY=postgres" >> backend/.env
```

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
   - Run `docker-compose pull && docker-compose up -d`

Enjoy your automated deploy pipeline!
