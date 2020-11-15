import React, { Component } from 'react'
import { DataContext } from '../Context/Context'
import {Link} from 'react-router-dom'
import Colors from '../Context/Products/Colors'

export default class Cart extends Component {
  static contextType =DataContext
  render() {
    const {cart} = this.context
    return (
      <>
        {
          cart.map(item=>{
            return(
              <div className='details' key =''>
                <img src={item.src} alt=""/>
                <div className="box">
                  <div className="row">
                    <h2>
                      {item.title}
                    </h2>
                    <span>{item.price}гр</span>
                  </div>
                  <Colors colors ={item.colors} />
                  <p>{item.description}</p>
                  <p>{item.content}</p>
                  <Link to='/cart' className='cart_btn'>
                    Добавить в корзину
                  </Link>
                </div>
              </div>
            )
          })
        }
      </>
    )
  }
}
