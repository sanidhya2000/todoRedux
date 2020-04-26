import React,{Component} from 'react';
import {Jumbotron,Button} from 'react-bootstrap'

class Home extends Component{

    constructor(props){
        super(props);
    }
    render(){
        return(
           <div>
               <Jumbotron style={{width:"60%",margin:"0 auto",marginTop:"5%",marginBottom:"10%",color: "#fff",fontFamily:"Montserrat,sans-serif","lineHeight": "44px","fontWeight":"700",fontSize:"2.0rem",background:"linear-gradient(#00C3FF,#0065FF)"}}>
                    <h1 style={{textAlign:"center"}}>Todo List</h1>
                    <p style={{textAlign:"center",fontSize:"1.6rem",color:"rgba(0,0,0,0.6)"}}>
                        !Manage your daily tasks Easily!
                        <br/>
                        {this.props.isLoggedIn?
                         <Button variant="success" style={{marginTop:"2%"}} href="/todo">Enter Todo</Button>
                        :
                        <Button variant="success" style={{marginTop:"2%"}} onClick={this.props.onClickLogin}>Login/Signup</Button>
                        }
                        </p>
                   
                </Jumbotron>
           </div>
        )
    }

}

export default Home;