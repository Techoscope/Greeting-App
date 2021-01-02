import React from 'react'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello Guest</h1>
        <label htmlFor="user_name">Enter your name:</label> <br/>
        <input id="user_name" type="text"/>
      </div>
    );
  }
}

export default App;
