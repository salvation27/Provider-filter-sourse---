import React, { Component } from 'react'
import logo from '../../logo.svg'

import {Link,NavLink} from 'react-router-dom'
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

    // const {toggle} =this.state


    return (
     <header>
       <div className="container">
       <div className="menu flex">
       <Link to='/'>
       <div className="header_logo">
            <img src={logo} alt=""/>
         </div>
       </Link>
         <div className="header_menu flex header_menu_wrap">
           <div className="header_menu_wrap">
             <nav className='nav'>
              <NavLink to='/'>Главная</NavLink>
              {/* <NavLink to='/posts'>Товары</NavLink>
              <NavLink to='/contacts'>Контакты</NavLink>
              <NavLink to='/about'>О нас</NavLink>
              <NavLink to='/login'>Логин</NavLink> */}
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
