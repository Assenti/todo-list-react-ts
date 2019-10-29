import React, { useState } from 'react';

export interface TodoInput {
    onNewTodoInput: Function
}

const TodoInput = ({ onNewTodoInput }: TodoInput) => {
    const [todo, setTodo] = useState('')

    const handleInput = (e: any) => {
        e.preventDefault()
        onNewTodoInput(todo)
        setTodo('')
    }

    return (
        <form className="todo-input" 
            onSubmit={handleInput}>
            <input value={todo}
                placeholder="What needs to be done"
                onChange={e => setTodo(e.target.value)}/>
            <button className={!todo ? 'btn primary disabled-btn' : 'btn primary'}
                type="submit"
                disabled={!todo}>add</button>
        </form>
    );
}

export default TodoInput;
