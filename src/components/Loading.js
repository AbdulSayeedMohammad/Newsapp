import React, { Component } from 'react'
import loading from './loading.gif'
export class Loading extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} height={100}width={100}/>
      </div>
    )
  }
}

export default Loading
