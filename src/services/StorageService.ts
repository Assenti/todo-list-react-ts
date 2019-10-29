import { Todo } from '../models/Todo'

export const updateStorage = (todos: Todo[]) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

export const getTodos = (): Todo[] => {
    let todos: Todo[] = []
    let todosString = localStorage.getItem('todos')
    if (todosString) {
        todos = JSON.parse(todosString)
    }
    return todos
}

export const clearStrorage = () => {
    localStorage.removeItem('todos')
}