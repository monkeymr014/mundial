import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Match from './components/Match/Match';
import Header from './components/Match/Header/Header';
import { getMatchInfo } from './api.js';
import './index.css'

class App extends React.Component {

  state = {
    data: [],
    url: 'match'
  }
  getMatchData = () => {
    getMatchInfo(this.state.url).then((response) => {
      this.setState({
        data: response.data.data,
      });
    }).catch(err => console.log(err.message));
  }

  render() {
    console.log(this.state);
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Match data={this.state.data} getMachDataFn={this.getMatchData} ></Match>} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;
