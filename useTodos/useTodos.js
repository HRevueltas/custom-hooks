import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
const init = () => {
    return JSON.parse(localStorage.getItem('todo')) || [];
}
export const useTodos = (initialState = {}) => {


    const [todos, dispatch] = useReducer(todoReducer, [], init)


    useEffect(() => {

        localStorage.setItem('todo', JSON.stringify(todos));

    }, [todos])

    const handleNewTodo = (todo) => {
        const action = {
            type: 'Add ToDo',
            payload: todo
        }
        dispatch(action)
    }

    const handleDeleteTodo = (id) => {
        const action = {
            type: 'Remove ToDo',
            payload: id
        }
        dispatch(action)
    }

    const handleToggleTodo = (id) => {

        const action = {
            type: 'Toggle ToDo',
            payload: id
        }
        dispatch(action)
    }

    return {
        initialState,
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter((todo => !todo.done)).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    }
}