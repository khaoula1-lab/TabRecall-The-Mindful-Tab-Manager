from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class TabBase(BaseModel):
    url: str  
    title: Optional[str] = None
    why: str  
    remind_at: Optional[datetime] = None

# Schema used when creating a new tab
class TabCreate(TabBase):
    pass

# Schema used when updating a tab's status or reminder
class TabUpdate(BaseModel):
    why: Optional[str] = None
    remind_at: Optional[datetime] = None
    status: Optional[str] = None  

# Schema returned back to the user
class TabResponse(TabBase):
    id: int
    created_at: datetime
    status: str

    class Config:
        from_attributes = True