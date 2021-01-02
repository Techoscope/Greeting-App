import React from 'react';
import Form from './components/Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'Guest'
    }
    this.changeName = this.changeName.bind(this);
  }

  changeName(name){
    this.setState({
      userName: name.trim() ? name : 'Guest'
    })
  }
  
  render() {
    return (
      <div>
        <h1>Hello {this.state.userName}</h1>
        <Form onInput={this.changeName} />
      </div>
    );
  }
}

export default App;
