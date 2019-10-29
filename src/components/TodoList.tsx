import React, { useState } from 'react';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';
import Snackbar from './Snackbar';
import TodoListControls from './TodoListControls';
import { getTodos, updateStorage } from '../services/StorageService';
import { Todo } from '../models/Todo';

const TodoList: React.FC = () => {
    let initialTodos: Todo[] = getTodos()
    
    const [todos, setTodos] = useState(initialTodos)
    const [search, setSearch] = useState('')
    const [searchField, setSearchField] = useState(false)
    const [message, setMessage] = useState('')

    const addNewTodo = (title: string) => {
        if (todos.length > 0) {
            for (const todo of todos) {
                if (todos.length > 0 && todo.title === title) {
                    setMessage('Todo with such title is already exists')
                } else {
                    pushNewTodo(title)
                }
            }
        } else {
            pushNewTodo(title)
        }
    }

    const pushNewTodo = (title: string) => {
        let updatedTodosString = JSON.stringify(todos)
        let updatedTodos = JSON.parse(updatedTodosString) as Todo[]
        updatedTodos.push({
            title: title,
            isDone: false
        })
        updateStorage(updatedTodos)
        setTodos(updatedTodos)
    }

    const deleteTodo = (index: number, title: string) => {
        let _todos = todos.filter(todo => todo.title !== title)
        updateStorage(_todos)
        setTodos(_todos)
        setMessage(`Task: ${title} deleted`)
    }

    const toggleDone = (index: number, title: string) => {
        let updatedTodos: Todo[] = []

        for (let i = 0; i < todos.length; i++) {
            if (i === index && todos[i].title === title) {
                updatedTodos.push({
                    title: title,
                    isDone: true
                })
            } else {
                updatedTodos.push(todos[i])
            }
        }
        
        setTodos(updatedTodos)
    }

    const filteredTodos = (todos: Todo[]) => {
        if (search) {
            return todos.filter(todo => {
                return todo.title.toLowerCase().includes(search.toLowerCase())
            })
        } else {
            return todos
        }
    }

    const toggleSearch = () => {
        if (todos.length > 0) {
            let trigger = searchField ? false : true
            setSearchField(trigger)
        }
    }

    const removeSnackbar = () => {
        setMessage('')
    }

    const clearTodoList = () => {
        setTodos([])
        setMessage('Todo list cleared')
    }

    return (
        <div className="todo-list__container">
            {message ? <Snackbar message={message} onClose={removeSnackbar}/> : ''}

            <div className="todo-list__title" title="Created by Asset Sultanov">Todo List</div>

            <TodoListControls
                todosLength={todos.length}
                searchField={searchField}
                onToggleSearch={toggleSearch} 
                onClearTodoList={clearTodoList}/>

            {searchField ? 
                <input className="search-input" 
                    value={search}
                    placeholder="Search todo..."
                    onChange={e => setSearch(e.target.value)}/> : 
                <TodoInput onNewTodoInput={addNewTodo}/>}

            <div className="todo-list">
                {filteredTodos(todos).map((item, index) => {
                    return <TodoItem 
                        key={index}
                        index={index}
                        title={item.title}
                        isDone={item.isDone}
                        onDeleteTodo={deleteTodo}
                        onToggleDone={toggleDone}/>
                })}
            </div>
        </div>
    );
}

export default TodoList;
