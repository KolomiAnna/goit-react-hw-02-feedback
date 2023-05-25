import React from "react"; 

import ToDo from 'components/test/ToDo';
import todo from 'todo.json';

class ToDoList extends React.Component{
    state={
    todoList: todo,
    }

    handleCheckedCompleted = (id) => {
        this.setState((prevState) => (
             {
                todoList: prevState.todoList.map((todo) =>
                    todo.id === id
                        ? { ...todo, completed: !todo.completed }
                        : todo)
            }
        ))
    }

    handleDelete = (id) => {
        this.setState(prevState =>(
        {
                todoList: prevState.todoList.filter(todo =>
                  todo.id !== id),
        }))
    }

    render() {
        return (
            <>
                <h1>My To-Do List</h1>
                <ul>
                    {this.state.todoList.map((todo) => (
                        <ToDo key={todo.id} todo={todo} handleCheckedCompleted={this.handleCheckedCompleted} handleDelete={this.handleDelete} />
                    ))}
                </ul>
            </>  
    )
       
}
}


export default ToDoList;