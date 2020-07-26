import React, { Component } from 'react'
class form extends Component {
state={
  name:"",
  email:"",
  password:""
};

handleEmail=(event)=>{
  this.setState({email:event.target.value});
};
handleName=(event)=>{
  this.setState({name:event.target.value});
};
handlePassword=(event)=>{
  this.setState({password:event.target.value});
};
handleSubmit=event=>{
  event.preventDefault()
  const {name,password,email}=this.state;
}
handleChange=event=>{
  this.setState({[event.target.name]:event.target.value})
}

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="name" name="name" value={this.state.name}/>  
          <input onChange={this.handleEmail} type="email" name="email" value={this.state.email}/>  
          <input onChange={this.handlePassword} type="password" name="password" value={this.state.password}/>  
          <input type="submit" name="" value="Sign Up"/>  
       
        </form>
        )   ;
    }  
}

export default form







