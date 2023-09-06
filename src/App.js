
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import About from './components/About';


export default class App extends Component {

    state={
      progress:0
    }
    progressBar=(e)=>{
      this.setState({progress:e})
    }
    render() {
    return (
      <div>
        <Router>
          <NavBar />

          <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        onLoaderFinished={() => this.progressBar(0)}
      />


          <Routes>
          <Route path="/" element={ <News progressBar={this.progressBar} key="general" category="general" />} />
            <Route path="/about" element={ <About/>} />
            <Route path="/business" element={ <News progressBar={this.progressBar} key="business" category="business" />} />
            <Route path="/entertainment" element={ <News progressBar={this.progressBar} key="entertainment" category="entertainment" />} />
            <Route path="/health" element={ <News progressBar={this.progressBar} key="health" category="health" />} />
            <Route path="/science" element={ <News progressBar={this.progressBar} key="science" category="science" />} />
            <Route path="/sports" element={ <News progressBar={this.progressBar} key="sports" category="sports" />} />
            <Route path="/technology" element={<News progressBar={this.progressBar} key="technology" category="technology" />} />
          </Routes>
        </Router>
  
      </div>



    )
  }
}
