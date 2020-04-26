/* eslint no-restricted-globals:0 */

import React,{Component} from 'react';
import AddTodo from './todoComponent/addComponent';
import ListComponent from './todoComponent/todoListComponent'

const initialState = {
    todoItem : []
}

class MainApp extends Component{

    constructor(props){
        super(props);
        this.state = initialState
    }
    componentDidMount(){
        this.props.getTodos();
        // console.log(this.props.todos)
        // this.setState({todoItem:this.props.todos})
    }

    

    addTodo = (text)=>{
        this.props.addTodo({todoText:text,complete:false});
        localStorage.setItem('todoList',JSON.stringify(this.props.todos))
        // this.setState({todoItem:this.props.todos})
        
        // this.props.getTodos();
    }

    completeATodo = (index) =>{
        this.props.checkTodo(index);
        // this.props.getTodos();   
    }

    render(){
        // console.log(this.state)
        // console.log(JSON.parse(localStorage.getItem("todoList")))
        const todosList = this.props.todos.map((todo,i)=>{
            return(
                <ListComponent key={i} index={i} text={todo.todoText} complete={todo.complete} completeIt={this.props.checkTodo}/>
            )
        })
        return(
            <div>

               <AddTodo add={this.props.addTodo}/>
               
               {todosList}
            </div>
        )
    }

}

export default MainApp;