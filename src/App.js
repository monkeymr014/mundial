import React from 'react';
import './App.css';
import  {getMatchInfo}  from './api.js';

class App extends React.Component {

  state = {
    data: []
  }
  componentWillMount() {
    getMatchInfo().then((response) => {
        this.setState({
          data: response.data,
        });
    }).catch(err=>console.log(err.message));
}

  render() {
    console.log(this.state);
    return (
      <div className="App">  
        <h1>Mundial</h1>
      </div>
    )
  }
}

export default App;
