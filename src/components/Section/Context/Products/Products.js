import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from '../Context'
import './Products.css'
import Serch from './Serch' 
// import Buttons from './Buttons'

class Products extends Component {
 state = {
   data:DataContext,
   serchData:'',
  //  itemsAll:DataContext
 }

  handelInput = (e) => {
    this.setState({ serchData: e.target.value})
  }

 

  
  
 static contextType = DataContext

  render() {
    const {posts} = this.context
      let filtered = posts.filter((item)=>{
        return item.title.toLowerCase().includes(this.state.serchData.toLowerCase())
      })
    return (
      <>
      <h1>Полезное по реакту</h1>
      <Serch handelInput =  {this.handelInput} />
      {/* <Buttons handleBtns={this.handleBtns} /> */}
      <div id='product'>
        {
          filtered.map(item=>{
            return(
              <Link to = {`/post/${item._id}`} key ={item._id}>
                <div className='card' key ={item._id}>
                    <div className="content">
                          <h4>
                            {item.title} 
                          </h4>
                          <div className='card_description'>
                              {item.way}
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