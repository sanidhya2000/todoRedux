import React,{Component} from 'react'
import {Container,Row,Col,Image,Button} from 'react-bootstrap'

class Footer extends Component{


	render(){
		return(

				<Container fluid="md" className="conta" >
				  <Row  style={{justifyContent:"center"}}>
				   <hr style={{color:"black",width:"100%",border:"2px rgba(0,0,0,0.2) solid"}}/>
                    <h6 style={{textAlign:"center"}}>Made with ♥ by <a href="https://github.com/sanidhya2000">Sanidhya Samadhiya</a></h6>
				  </Row>
				</Container>
			)
	}

}

export default Footer