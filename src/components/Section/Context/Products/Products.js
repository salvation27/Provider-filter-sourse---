import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from '../Context'
import './Products.css'
import Serch from './Serch' 
import Buttons from './Buttons'
import client from './ContentFul'


class Products extends Component {
 state = {
   data:[],
   itemsAll:[],
   serchData:'',
  //  itemsAll:DataContext
 }

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
    data:storeProducts,
    itemsAll:storeProducts,
    // featuredProducts,
  })
}



  handelInput = (e) => {
    this.setState({ serchData: e.target.value})
  }


  handleBtns = (e) => {
    let productCopy
    if(e.target.value === 'All'){
     productCopy=this.state.data
    } else {
     productCopy=this.state.data.filter((item)=>item.fields.cat===e.target.value)
    }
    this.setState({
     itemsAll:productCopy
    })
 }
 
 static contextType = DataContext


  render() {
    let filterItems = this.state.itemsAll
    let filtered = filterItems.filter((item)=>{
      return item.fields.title.toLowerCase().includes(this.state.serchData.toLowerCase())
    })

    return (
  
      <>
      <h1>Полезное по реакту</h1>

      <Buttons handleBtns={this.handleBtns} rooms={this.state.itemsAll} />
      <Serch handelInput =  {this.handelInput} />
      {/* <Buttons handleBtns={this.handleBtns} /> */}
      <div id='product'>
        {
          filtered.map(item=>{
            return(
              <Link to = {`/post/${item.fields.id}`} key ={item.fields.id}>
                <div className='card' key ={item.fields.id}>
                    <div className="content">
                          <h4>
                            {item.fields.title} 
                          </h4>
                          <div className='card_description'>
                              {item.fields.cat}
                          </div>
                    </div>

                </div>
              </Link>
            )
          })
        }
      </div>
      </>
    )
  }
}

export default Products