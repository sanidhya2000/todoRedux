import React,{Component} from 'react';
import {InputGroup,FormControl, Button} from 'react-bootstrap'
import {Done} from '@material-ui/icons'
import {FormControlLabel,Checkbox} from '@material-ui/core'
class ListComponent extends Component{
    constructor(props){
        super(props)
    }
    complete = () =>{
        this.props.completeIt(this.props.index);
    }

    render(){
        return(
            <InputGroup size="lg" className="fieldParent" style={{width:"50%",margin:"0 auto",marginTop:"1%"}}>
                {!this.props.complete?
                    <InputGroup.Prepend>
                        <Button variant="dark" onClick={this.complete}>{this.props.index+1}</Button>
                        
                    </InputGroup.Prepend>
                    :
                    <InputGroup.Prepend>
                        <Button variant="success" onClick={this.complete} >{this.props.index+1}</Button>
                    </InputGroup.Prepend>
                }
                
                {!this.props.complete?
                    <FormControl aria-describedby="basic-addon1" disabled defaultValue={this.props.text}/>
                    :
                    <FormControl aria-describedby="basic-addon1" disabled defaultValue={this.props.text} style={{backgroundColor:"white",textDecoration: "line-through"}}/>
                }
            </InputGroup>
        )
        
    }
}

export default ListComponent