from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import OAuth2PasswordRequestForm
from app.auth import create_access_token, get_current_user, fake_users_db
from app.models import User, Todo, todos
from app.models import Todo, TodoCreate


router = APIRouter()

@router.post("/login")
def login(form_data: OAuth2PasswordRequestForm = Depends()):
    user = fake_users_db.get(form_data.username)
    if not user or user["password"] != form_data.password:
        raise HTTPException(status_code=400, detail="Incorrect username or password")
    access_token = create_access_token(data={"sub": user["username"]})
    return {"access_token": access_token, "token_type": "bearer"}

@router.get("/profile", response_model=User)
def get_profile(current_user: dict = Depends(get_current_user)):
    return {"username": current_user["username"], "role": current_user["role"]}

@router.post("/todos", response_model=Todo)
def create_todo(todo: TodoCreate, current_user: dict = Depends(get_current_user)):
    new_todo = Todo(
        id=len(todos) + 1,
        title=todo.title,
        description=todo.description,
        completed=False,
        owner=current_user["username"]
    )
    todos.append(new_todo)
    return new_todo

@router.get("/todos", response_model=list[Todo])
def get_todos(current_user: dict = Depends(get_current_user)):
    return [todo for todo in todos if todo.owner == current_user["username"]]

@router.delete("/todos/{todo_id}")
def delete_todo(todo_id: int, current_user: dict = Depends(get_current_user)):
    for todo in todos:
        if todo.id == todo_id and todo.owner == current_user["username"]:
            todos.remove(todo)
            return {"message": "Todo deleted"}
    raise HTTPException(status_code=404, detail="Todo not found")
