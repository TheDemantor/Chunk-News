// More to do
// 1. Place a search bar and fetch news if found on that topic
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API;
  state = {
    progress: 0,
    color: '#FFFF00'
  }
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  setColor = (color) => {
    this.setState({ color: color })
  }

  render() {
    return (

      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color={this.state.color}
            progress={this.state.progress}
            onLoaderFinished={() => this.setProgress(0)}
          />
          <Routes>
            <Route path="/" element={<News apiKey={this.apiKey} setColor={this.setColor} setProgress={this.setProgress} key="general" pageSize={9} category="general" country="in" />}></Route>
            <Route path="/business" element={<News apiKey={this.apiKey} setColor={this.setColor} setProgress={this.setProgress} key="business" pageSize={9} category="business" country="in" />}></Route>
            <Route path="/entertainment" element={<News apiKey={this.apiKey} setColor={this.setColor} setProgress={this.setProgress} key="entertainment" pageSize={9} category="entertainment" country="in" />}></Route>
            <Route path="/health" element={<News apiKey={this.apiKey} setColor={this.setColor} setProgress={this.setProgress} key="health" pageSize={9} category="health" country="in" />}></Route>
            <Route path="/science" element={<News apiKey={this.apiKey} setColor={this.setColor} setProgress={this.setProgress} key="science" pageSize={9} category="science" country="in" />}></Route>
            <Route path="/sports" element={<News apiKey={this.apiKey} setColor={this.setColor} setProgress={this.setProgress} key="sports" pageSize={9} category="sports" country="in" />}></Route>
            <Route path="/technology" element={<News apiKey={this.apiKey} setColor={this.setColor} setProgress={this.setProgress} key="technology" pageSize={9} category="technology" country="in" />}></Route>

          </Routes>
        </Router>
      </div>

    )
  }
}


