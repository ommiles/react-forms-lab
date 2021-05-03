import React from 'react';

class TwitterMessage extends React.Component {

  state = {
    message: ''
  }

  handleChange = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    this.setState({
      message: e.target.value
    })
  }
  
  render() {
    console.log(this.props.maxChars)
    return (
      <div>
        <strong>Your message:</strong>
        <input 
        type='text' 
        name='message' 
        id='message' 
        value={this.state.message}
        onChange={this.handleChange} />
        <p>Characters Remaining: {this.props.maxChars - this.state.message.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
