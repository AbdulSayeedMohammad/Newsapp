import React, { Component } from 'react'
import loading from './loading.gif'
export class Loading extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} height={50}width={50}/>
      </div>
    )
  }
}

export default Loading
