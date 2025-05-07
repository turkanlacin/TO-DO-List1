from pydantic import BaseModel
from typing import Optional, List

class User(BaseModel):
    username: str
    role: str

class Todo(BaseModel):
    id: int
    title: str
    description: Optional[str] = None
    completed: bool = False
    owner: str

class TodoCreate(BaseModel):
    title: str
    description: Optional[str] = None


# Mock veri listesi
todos: List[Todo] = []

