import React,{Component} from 'react';
import {InputGroup,FormControl, Button,Alert} from 'react-bootstrap'
import {CalendarToday,LabelImportant} from '@material-ui/icons'
import '../../csses/addComponent.css'

const initialState = {
    todoText :''
}
class AddTodo extends Component{
    constructor(props){
        super(props)
        this.state = initialState

    }
    
    addText = (e) =>{
        let value = e.target.value.trim()
		this.setState({todoText : value})
    }

    onClickAdd = ()=>{
        if(this.state.todoText!=''){
            // this.props.add(this.state.todoText);
            // this.setState({todoText:""})
            this.setState({todoText:""})
            this.props.add({todoText:this.state.todoText,complete:false});
            

        }
        
    }
    render(){
        console.log(this.state)
        return(
            <InputGroup size="lg" className="fieldParent" style={{width:"50%",margin:"0 auto",marginTop:"1%",marginBottom:"5%"}}>
                
                <InputGroup.Prepend>
                   <CalendarToday style={{  fontSize:'3em'}}/>
                </InputGroup.Prepend>
                
                <FormControl aria-describedby="basic-addon1" onChange={this.addText}  value={this.state.todoText} placeHolder="Add a new todo"/>
                <InputGroup.Prepend>
                    <Button variant="danger" onClick={this.onClickAdd} style={{borderBottomRightRadius:'10px',borderTopRightRadius:'10px'}}>
                        <LabelImportant />
                    </Button>
                </InputGroup.Prepend>
            </InputGroup>
        )
        
    }
}

export default AddTodo