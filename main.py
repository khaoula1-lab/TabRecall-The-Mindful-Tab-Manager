from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse
from sqlalchemy.orm import Session
from typing import List

import models
import schemas
from database import engine, get_db

models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="TabRecall API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/", response_class=HTMLResponse)
def read_root():
    try:
        with open("static/index.html", "r", encoding="utf-8") as f:
            return HTMLResponse(content=f.read())
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail="Frontend file not found")


@app.post("/tabs/", response_model=schemas.TabResponse)
def create_tab(tab: schemas.TabCreate, db: Session = Depends(get_db)):
    db_tab = models.Tab(
        url=tab.url,
        title=tab.title,
        why=tab.why,
        remind_at=tab.remind_at
    )
    db.add(db_tab)
    db.commit()
    db.refresh(db_tab)
    return db_tab

@app.get("/tabs/", response_model=List[schemas.TabResponse])
def read_tabs(status: str = "active", db: Session = Depends(get_db)):
    tabs = db.query(models.Tab).filter(models.Tab.status == status).all()
    return tabs

@app.put("/tabs/{tab_id}", response_model=schemas.TabResponse)
def update_tab(tab_id: int, tab_update: schemas.TabUpdate, db: Session = Depends(get_db)):
    db_tab = db.query(models.Tab).filter(models.Tab.id == tab_id).first()
    if not db_tab:
        raise HTTPException(status_code=404, detail="Tab not found")
    
    update_data = tab_update.dict(exclude_unset=True)
    for key, value in update_data.items():
        setattr(db_tab, key, value)
        
    db.commit()
    db.refresh(db_tab)
    return db_tab
