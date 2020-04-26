import {GET_TODOS,ADD_TODO,CHECK_TODO} from '../actions/actionType';

const initialState = {
    todos : []
};

const pushItem = (todos,item) =>{
    todos.push(item);
    return todos;
}

const checkItem = (todos,index)=>{
    todos[index].complete = !todos[index].complete;
    localStorage.setItem('todoList',JSON.stringify(todos))
    return todos;
}
let todos;
const reducer = (state=initialState,action)=>{
    switch(action.type){
        case GET_TODOS:
            return{
                ...state,
                todos : JSON.parse(localStorage.getItem('todoList'))    
            };
        case ADD_TODO:
            todos = [...state.todos]
            todos.push(action.todoItem)
            localStorage.setItem('todoList',JSON.stringify(todos))
            // console.log(todos,action.todoItem)
            return{
                ...state,
                todos
            };
        case CHECK_TODO:
            todos = [...state.todos]
            todos[action.todoToggleIndex].complete = !todos[action.todoToggleIndex].complete;
            localStorage.setItem('todoList',JSON.stringify(todos))
            return{
                ...state,
                todos
            };
        default:
            return state
    }
};

export default reducer