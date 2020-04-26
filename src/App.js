import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import CallBack from './Components/CallBack'
import MainApp from './Components/mainApp'
import ErrorPage from './Components/ErrorPage'
import Home from './Components/HomePage'
import Auth from './Components/AuthenticationHandle/Auth'
import {getTodos,addTodo,checkTodo} from './store/actions/index'
import {connect} from 'react-redux'
import {Navbar,Nav,Button,NavDropdown} from 'react-bootstrap'
import Footer from './Components/footer'
import 'bootstrap/dist/css/bootstrap.min.css';

const mapStateToProps = state =>{
  return{
    todos:state.todos.todos
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    onGetTodos :()=>dispatch(getTodos()),
    onAddTodo :(todoItem)=>dispatch(addTodo(todoItem)),
    onCheckTodo : (index)=>dispatch(checkTodo(index))
  }
}

const auth = new Auth();
const initialState = {
  isLoggedIn : auth.isAuthenticated()
}

class App extends Component {

  constructor(props){
    super(props);
    this.state = initialState;
  }
  componentWillMount() {
    document.title = 'TodoApp'
  }

  getTodos = () =>{
    this.props.onGetTodos();
  }  

  addTodo = (todoItem)=>{
    this.props.onAddTodo(todoItem);
  }

  checkTodo = (index)=>{
    this.props.onCheckTodo(index);
  }

  signOutUser = ()=>{
    auth.logout();
    this.setState({isLoggedIn:false})
  }

  render(){
    // console.log(auth.getProfile())
    return (
      <div className="App">
        <Router>
        <div style={{"background":"linear-gradient(#00C3FF,#0065FF)"}} >
                
                <Navbar expand="lg" style={{width:"90%",margin:"0 auto"}}>
                <Navbar.Brand href="/" style={{color: "#fff",fontFamily:"Montserrat,sans-serif","lineHeight": "44px","fontWeight":"700",fontSize:"1.8rem"}}> Todo.</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                       
                        </Nav>
                        {!this.state.isLoggedIn?
                          <Nav className="mr-right"  >
                              <Nav.Link style={{"margin-right":"2%","color":"white"}} onClick={auth.login}>Login/Signup</Nav.Link>
                          </Nav>
                          :
                          <Nav className="mr-right"  >
                            <NavDropdown title={`Hey ${auth.getProfile().given_name||""}`} 
                            id="basic-nav-dropdown"
                            style= {{border:"1px ",borderRadius:"5%",backgroundColor:"rgba(255,255,255,0.5)",color:"white"}}
                            >
                              <NavDropdown.Item  onClick={this.signOutUser}>Logout</NavDropdown.Item>
                  
                            </NavDropdown>
                          </Nav>
                        }
                    </Navbar.Collapse>
                </Navbar>
            </div>


          <Switch>
            <Route path="/todo">
                {auth.isAuthenticated()?
                <MainApp todos={this.props.todos} 
                addTodo={this.addTodo} 
                checkTodo={this.checkTodo} 
                getTodos={this.getTodos}
                />
                :<ErrorPage/>
                }
            </Route>  
            <Route path="/callback">
                <CallBack />
            </Route>
            <Route path="/error">
                <ErrorPage/>
            </Route>
            <Route path="/">
                <Home onClickLogin = {auth.login} isLoggedIn={this.state.isLoggedIn}/>
            </Route>
          </Switch>
          <Footer/>
        </Router>
      </div>
    );
  }
  
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
