import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'Guest'
    }
  }

  render() {
    return (
      <div>
        <h1>Hello {this.state.userName}</h1>
        <label htmlFor="user_name">Enter your name:</label> <br/>
        <input id="user_name" type="text"/>
      </div>
    );
  }
}

export default App;
