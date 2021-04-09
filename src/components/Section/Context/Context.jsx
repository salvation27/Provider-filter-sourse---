import React, { Component } from 'react'

// import posts from './Products/bd1'
import client from '../Context/Products/ContentFul'


export const DataContext = React.createContext()


export  class DataProvider extends Component {

  state = {posts:[]}

  componentDidMount(){
    client.getEntries({
       content_type:'pomow',
     })
     .then((response)=>this.setProducts(response.items))
     .catch(console.error)
  }

  setProducts = products => {
    let storeProducts = products.map(item => {
      
      const product = {...item};
      return product;
    })
  
    this.setState({
      posts:storeProducts,
      // featuredProducts,
    })
  }



  render() {
    const {posts} = this.state
    console.log('444',posts);
    return (
      <DataContext.Provider value = {{posts}}>
        {this.props.children}
      </DataContext.Provider>
    )
  }
}
