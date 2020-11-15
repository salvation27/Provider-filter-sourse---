import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import {DataProvider} from './components/Section/Context/Context'

import Header from './components/Header/Header'
import Section from './components/Section/Section'

class App extends React.Component{
  render(){
    return(
      <DataProvider>
        <div className='app'>
          <Router>
                <Header/>
                <Section />
          </Router>
        </div>
      </DataProvider>
    )
  }
}

export default App;
