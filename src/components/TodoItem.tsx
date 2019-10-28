import React from 'react';

export interface TodoItem {
    title: string,
    isDone: boolean | undefined,
    isImportant: boolean | undefined,
    index?: number,
    onDeleteTodo: Function,
    onToggleDone: Function,
    onToggleImportance: Function
}

const TodoItem = ({ title, isDone, isImportant, index, onDeleteTodo, onToggleDone, onToggleImportance }: TodoItem) => {

    const deleteTodo = () => {
        onDeleteTodo(index, title)
    }

    const toggleDone = () => {
        onToggleDone(index, title)
    }

    return (
        <div className={isDone ? 'todo-item animated slideInUp fast done' : 'todo-item animated slideInUp fast'}>
            <div className="todo-item__checks">
                <label className="todo-item__checkbox done">
                    <input type="checkbox"
                        onChange={() => toggleDone()} 
                        defaultChecked={isDone}/>
                    <span></span>
                </label>
                {/* <label className="todo-item__checkbox important">
                    <input type="checkbox" defaultChecked={isImportant}/>
                    <span></span>
                </label> */}
            </div>
            <div className={isDone ? 'todo-item__title done' : 'todo-item__title'}>{ title }</div>
            <div className="todo-item__controls">
                <div className="icon__btn medium error" onClick={deleteTodo}>
                    <i className="material-icons">delete</i>
                </div>
            </div>
        </div>
    );
}

export default TodoItem;
