import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Match from './components/Match/Match';
import Header from './components/Header/Header';
import Standings from './components/Standings/Standings'
import { getMatchInfo } from './api.js';
import './index.css'

class App extends React.Component {

  state = {
    data: [],
    url: ''
  }
  getMatchData = (e) => {
    getMatchInfo(e).then((response) => {
      
      this.setState({
      
        data: response.data.data
      });
    }).catch(err => console.log(err.message));
  }
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Match data={this.state.data} getMachDataFn={this.getMatchData} ></Match>} />
          <Route path="/standings" element={<Standings data={this.state.data} getMachDataFn={this.getMatchData} ></Standings>} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;
