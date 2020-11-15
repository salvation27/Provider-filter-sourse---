import React, { Component } from 'react'
import logo from '../../logo.svg'

import {Link} from 'react-router-dom'
import {DataContext} from '../Section/Context/Context'


export default class Header extends Component {

static contextType =  DataContext 
state = {
  toggle:false
}

menuToggle= () => {
  this.setState({
    toggle:!this.state.toggle
  })
}
  render() {

    const {toggle} =this.state


    return (
     <header>
       <div className="container">
       <div className="menu flex">
         <div className="header_logo">
            <img src={logo} alt=""/>
         </div>
         <div className="header_menu flex header_menu_wrap">
           <div className="header_menu_wrap">
             <nav className={toggle ? "toggle":""}>
              <Link to='/'>Главная</Link>
              <Link to='/posts'>Товары</Link>
              <Link to='/contacts'>Контакты</Link>
              <Link to='/about'>О нас</Link>
              <Link to='/login'>Логин</Link>
             </nav>
           </div>
           <div className="close" onClick={this.menuToggle}>
               Меню
             </div>
           
         </div>
       </div>         
       </div>
     </header>
    )
  }
}
