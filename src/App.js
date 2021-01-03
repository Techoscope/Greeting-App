import React from 'react';
import Form from './components/Form';
import GreetingMessage from './components/GreetingMessage';

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
        <GreetingMessage name={this.state.userName}/>
        <Form onInput={this.changeName} />
      </div>
    );
  }
}

export default App;
