import React from 'react';
import './App.css';
import './index.css'
import  {getMatchInfo}  from './api.js';
import Match from './components/Match/Match';

class App extends React.Component {

  state = {
    data: [ {}]
  }
   componentWillMount() {
    getMatchInfo().then((response) => {
        this.setState({
          data: response.data.data,
        });
    }).catch(err=>console.log(err.message));
} 

  render() {
    console.log(this.state);
    return (
      <div className="App">  
        <h1>Mundial</h1>
        <Match data={this.state.data} /> 
      </div>
    )
  }
}

export default App;
