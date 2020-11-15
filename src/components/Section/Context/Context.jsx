import React, { Component } from 'react'

import posts from './Products/bd1'
export const DataContext = React.createContext()


export  class DataProvider extends Component {

  state = {posts}

  
  render() {
    const {posts} = this.state
    
    return (
      <DataContext.Provider value = {{posts}}>
        {this.props.children}
      </DataContext.Provider>
    )
  }
}
