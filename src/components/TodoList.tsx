import React, { useState } from 'react';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';
import { Todo } from '../models/Todo';

const TodoList: React.FC = () => {
    let initialTodos: Todo[] = []
    
    let [todos, setTodos] = useState(initialTodos)

    const addNewTodo = (title: string) => {
        let updatedTodosString = JSON.stringify(todos)
        let updatedTodos = JSON.parse(updatedTodosString) as Todo[]
        updatedTodos.push({
            title: title,
            isDone: false,
            isImportant: false
        })
        setTodos(updatedTodos)
    }

    const deleteTodo = (index: number, title: string) => {
        console.log(index, title);
        setTodos(todos.splice(index, 1))
    }

    const toggleDone = (index: number, title: string) => {
        let updatedTodos: Todo[] = []

        for (let i = 0; i < todos.length; i++) {
            console.log(index, title);
            
            if (i === index && todos[i].title === title) {
                updatedTodos.push({
                    title: title,
                    isDone: true,
                    isImportant: todos[i].isImportant
                })
            } else {
                updatedTodos.push(todos[i])
            }
        }
        console.log(updatedTodos);
        
        setTodos(updatedTodos)
    }

    const toggleImportance = (index: number, title: string) => {

    }

    return (
        <div className="todo-list__container">
            <div className="todo-list__title">Todo List</div>
            <TodoInput onNewTodoInput={addNewTodo}/>
            <div className="todo-list">
                {todos.map((item, index) => {
                    return <TodoItem 
                        key={index}
                        index={index}
                        title={item.title}
                        isDone={item.isDone}
                        isImportant={item.isImportant}
                        onDeleteTodo={deleteTodo}
                        onToggleDone={toggleDone}
                        onToggleImportance={toggleImportance}/>
                })}
            </div>
        </div>
    );
}

export default TodoList;
