from fastapi import FastAPI
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI(title="Service Tool API")

class ServiceResponse(BaseModel):
    id: str
    title: str
    description: str
    category: str
    price: float

@app.get("/")
def read_root():
    return {"status": "Service Tool API is running"}

@app.get("/api/services", response_model=List[ServiceResponse])
def get_services():
    """Returns a list of available services"""
    # Sample data - in production this would connect to a database
    return [
        {
            "id": "startup-security-package",
            "title": "Startup Security Package",
            "description": "Complete security solution designed for early-stage startups.",
            "category": "security",
            "price": 4999.00
        },
        {
            "id": "full-stack-web-application",
            "title": "Full-Stack Web Application",
            "description": "Custom web application development with frontend and backend components.",
            "category": "development",
            "price": 9999.00
        }
    ]
