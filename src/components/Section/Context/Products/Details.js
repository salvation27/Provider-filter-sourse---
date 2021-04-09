import React, { Component } from 'react'
import {DataContext} from '../Context'



export default class Details extends Component {

  static contextType = DataContext
  state = {
    post:[]
  }

  getProduct = () => {
    if(this.props.match.params.id){
      const res = this.context.posts
      const data = res.filter((item)=>{
        return item.fields.id === this.props.match.params.id
      })
      this.setState({post:data})
    }
  }
componentDidMount(){
  this.getProduct()
}

  render() {
   
    const {post} = this.state

    return (
      <>
        {
          post.map(item=>{
            return(
              <div className='details' key =''>
                <div className="box">
                  <div className="row">
                    <h2>
                      {item.fields.title}
                    </h2>
                    <div className='detail_link'>
                    <strong>Описание:</strong> {item.fields.description}
                    </div>
                  {
                    item.fields.gitLink && 
                      <div className='detail_link detail_link_color'>
                          <strong><a target="blank" href={item.fields.gitLink}>Git-code</a></strong>
                      </div>
                  } 
                  {
                    item.fields.hostPage && 
                      <div className='detail_link detail_link_color'>
                          <strong><a target="blank" href={item.fields.hostPage}>Git-page</a></strong>
                      </div>
                  }
                    {
                      item.fields.youtubLink && 
                      <div className='detail_link detail_link_color'>
                        <strong>
                          <a target="blank" href={item.fields.youtubLink}>Урок на YouTybe</a>
                        </strong>
                      </div>
                    }
                    
                    
                  </div>
                 
                  
                </div>
              </div>
            )
          })
        }
      </>
    )
  }
}
