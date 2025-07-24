# service-tool

A dynamic Progressive Web App (PWA) with a React frontend, FastAPI backend, and Supabase database for showcasing and selecting services based on business scale and industry.

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

### TypeScript Improvements
- Added type assertions to resolve conflicts between different module type definitions
- Updated component props to handle nullable values properly
- Fixed service data access patterns to ensure proper type safety
   - Run `docker-compose pull && docker-compose up -d`

Enjoy your automated deploy pipeline!
