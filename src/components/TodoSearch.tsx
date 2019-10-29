import React, { useState } from 'react';

export interface TodoSearch {
    onSearch: Function
}

const TodoSearch = ({ onSearch }: TodoSearch) => {
    const [message, setMessage] = useState('')

    const handleInput = () => {
        onSearch(message)
        setMessage('')
    }

    return (
        <form className="todo-input" 
            onSubmit={handleInput}>
            <input value={message}
                placeholder="Search todo..."
                onChange={e => setMessage(e.target.value)}/>
        </form>
    );
}

export default TodoSearch;
