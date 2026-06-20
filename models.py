from sqlalchemy import Column, Integer, String,  DateTime
from datetime import datetime
from database import Base

class Tab(Base):
    __tablename__ =  "tabs"
    
    id = Column(Integer, primary_key=True, index=True)
    url = Column(String, nullable=False)
    title = Column(String, nullable=True)
    why = Column(String, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)
    remind_at= Column(DateTime, nullable=True)
    status = Column(String, default="active")
       
        