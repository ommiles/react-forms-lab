import React from "react";

class LoginForm extends React.Component {

  state = {
    username: '',
    password: ''
  }

  handleInput = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      }, () => console.log(this.state)
    )
  }

  handleSubmit = (e) => {
    e.preventDefault()
    e.target.reset()
    return this.props.handleLogin(this.state)
  }
  
  render() {
    return (
      <form 
      onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input 
            id="username" 
            name="username" 
            type="text"
            onChange={this.handleInput}
            required />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
            id="password" 
            name="password" 
            type="password"
            onChange={this.handleInput}
            required />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
