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
        return item._id === this.props.match.params.id
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
                      {item.title}
                    </h2>
                    <div className='detail_link'>
                    <strong>Описание</strong> {item.description}
                    </div>
                  {
                    item.gitHubLink && 
                      <div className='detail_link'>
                          <strong><a target="blank" href={item.gitHubLink}>Git-code</a></strong>
                      </div>
                  } 
                  {
                    item.gitHubPage && 
                      <div className='detail_link'>
                          <strong><a target="blank" href={item.gitHubPage}>Git-page</a></strong>
                      </div>
                  }
                    {
                      item.youtubLink && 
                      <div className='detail_link'>
                        <strong>
                          <a target="blank" href={item.youtubLink}>Урок на YouTybe</a>
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
