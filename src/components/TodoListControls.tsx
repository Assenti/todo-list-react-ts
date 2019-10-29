import React, { useState } from 'react';
import Dialog from './Dialog';
import { clearStrorage } from '../services/StorageService';

export interface TodoListControlsProps {
    todosLength: number,
    searchField: boolean,
    onToggleSearch: Function,
    onClearTodoList: Function
}

const TodoListControls = ({ todosLength, searchField, onToggleSearch, onClearTodoList } : TodoListControlsProps) => {
    const [dialogTitle, setDialogTitle] = useState('')

    const toggleSearch = () => {
        onToggleSearch()
    }
    
    const clearTodoList = () => {
        if (todosLength > 0) {
            clearStrorage()
            onClearTodoList()
            setDialogTitle('')
        }
    }

    const invokeClearFunc = () => {
        setDialogTitle('Are you sure want to clear todo list?')
    }

    const closeDialog = () => {
        setDialogTitle('')
    }

    return (
        <div className="todo-list__controls">

            {dialogTitle ? <Dialog 
                dialogTitle={dialogTitle}
                onClose={closeDialog}
                onConfirm={clearTodoList}/> : ''}

            <div className="icon__btn primary"
                id="search-field"
                onClick={toggleSearch}
                onBlur={toggleSearch} 
                title="Search todo">
                <i className="material-icons">{ searchField ? 'close' : 'search'}</i>
            </div>
            <div className="icon__btn error"
                id="search-field"
                onClick={invokeClearFunc} 
                title="Clear todo list">
                <i className="material-icons">delete_forever</i>
            </div>
        </div>
    );
}

export default TodoListControls;
