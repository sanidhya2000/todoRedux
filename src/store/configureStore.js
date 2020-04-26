import { createStore,combineReducers,compose } from 'redux'
import todoReducer from './reducers/Todo'

const rootReducer=combineReducers({
    todos:todoReducer
});

let composeEnhancers =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose 


const configureStore=()=>{
    return createStore(rootReducer,composeEnhancers());
}

export default configureStore;