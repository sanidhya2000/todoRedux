import {GET_TODOS,ADD_TODO,CHECK_TODO} from './actionType';


export const getTodos = () =>{
    return{
        type : GET_TODOS
    }
}

export const addTodo = (todoItem) => {
    return{
        type : ADD_TODO,
        todoItem : todoItem
    }
}

export const checkTodo = (index) =>{
    return{
        type : CHECK_TODO,
        todoToggleIndex :index
    }
}