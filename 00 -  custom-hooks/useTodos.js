import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

// load local storage data for reducer
const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleNewTodo = (todo) => {
        console.log(todo);

        const action = {
            type: 'ADD_TODO',
            payload: todo
        }

        dispatch(action);
    }

    const handleDeleteTodo = (id) => {
        const action = {
            type: 'DELETE_TODO',
            payload: id
        }

        dispatch(action);
    }


    const handleToggleTodo = (id) => {

        console.log("!", id)
        const action = {
            type: 'TOGGLE_TODO',
            payload: id,
        }
        dispatch(action);
    }

    return {
        handleToggleTodo,
        handleDeleteTodo,
        handleNewTodo,
        todos,
        pendingTodosCount: todos.filter( todo => !todo.done).length,
        todosCount: todos.length
    }
}
