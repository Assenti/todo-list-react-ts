import React, { useState } from 'react';

export interface TodoInput {
    onNewTodoInput: Function
}

const TodoInput = ({ onNewTodoInput }: TodoInput) => {
    const [message, setMessage] = useState('')

    const handleInput = (e: any) => {
        e.preventDefault()
        onNewTodoInput(message)
        setMessage('')
    }

    return (
        <form className="todo-input" 
            onSubmit={handleInput}>
            <input value={message}
                placeholder="Type your message"
                onChange={e => setMessage(e.target.value)}/>
            <button className={!message ? 'btn primary disabled-btn' : 'btn primary'}
                type="submit"
                disabled={!message}>send</button>
        </form>
    );
}

export default TodoInput;
