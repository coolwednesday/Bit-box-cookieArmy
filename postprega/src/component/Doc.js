import React, { Component } from 'react'
import Concern from './Concern'

import PropTypes from 'prop-types'

//export class Newsitem extends Component {
    export class Doc extends Component {
        static defaultProps={
          
        }
        static propTypes={
          lat:PropTypes.number,
          lng:PropTypes.number
        }
        constructor(props){
          super(props);
          this.state={
            items:[{}], 
        }
      }
        async componentDidMount()
      {
        let url=`https://discover.search.hereapi.com/v1/discover?at=${this.props.lat},${this.props.lng}&q=gynaecologist&apiKey=jhecD3unwS7DBKIY1BfWswycX4g3do8LlTPTumzCc7k`;
       
        let data=await fetch(url);
        let parseddata=await data.json()
        console.log(parseddata);
        this.setState({items:parseddata.items})
        console.log(this.state.items)
        
        
      }
      render() {
        return(
          <div className='container my-3'>
            <div className='row'>
            {this.state.items && this.state.items.flat().map((element)=>{ 
              
                return (<div className="col-sm-8 gyno mx-5 my-2">
                <Concern title={element.title} address={element.label}/>
             </div>)
            })}
      
            </div>
            </div>
            
            
            
        )
      }
    }