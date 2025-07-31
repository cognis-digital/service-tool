# Service Tool

Comprehensive service customization platform for businesses of all sizes. This platform provides a rich catalog of services across security, development, and consulting categories, with dynamic pricing and customization options.

## Features

### Rich Service Catalog
- **33+ Services** across security, development, and consulting categories
- **Multiple Business Scales**: Individual, Startup, Small Business, and Enterprise
- **Industry-Specific Customizations** for Finance, Healthcare, Retail, Technology, Manufacturing, and Education

### Technology Stack Options
- **150+ Technology Options** across 11+ categories
- **Realistic Pricing** from free open-source tools to enterprise-grade solutions
- **Categories**: Languages, Frontend, Backend, Mobile, Build Tools, Databases, Styling, Cloud, Integrations, Web3, Testing, Monitoring

### Interactive Customization
- **Package Builder Wizard** with dynamic options based on business scale and industry
- **Real-Time Pricing** updates as users select different options
- **Feature-Rich Selection** process with base features and add-ons

## Deployment

The application is deployed using GitHub Actions to GitHub Pages.

- **Frontend**: React/Vite application deployed to GitHub Pages
- **Backend**: Dockerized FastAPI service deployed via Docker Hub

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Backend Development

```bash
# Navigate to backend directory
cd backend

# Install Python dependencies
pip install -r requirements.txt

# Run backend server
uvicorn main:app --reload
```

## Deployment Workflows

The project uses GitHub Actions for automated deployment:

- `deploy-frontend.yml`: Deploys the frontend to GitHub Pages
- `deploy-backend.yml`: Builds and pushes the backend Docker image to Docker Hub

## Technology Stack

- **Frontend**: React, TypeScript, Vite, Tailwind CSS, Zustand
- **Backend**: Python, FastAPI
- **Deployment**: GitHub Actions, GitHub Pages, Docker
