import React from 'react'

class Form extends React.Component {
  constructor(props){
    super(props);
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(e) {
    this.props.onInput(e.target.value)
  }

  render() {
    return (
      <form>
        <label htmlFor="user_name">Enter your name:</label> <br/>
        <input id="user_name" type="text" onInput={this.handleInput}/>
      </form>
    )
  }
}

export default Form;