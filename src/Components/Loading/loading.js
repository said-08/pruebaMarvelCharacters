import React from 'react'
import './loading.scss'

export const Loading = () => {
  return (
    <div className='page'>
      <div className='circle-loading'></div>
      <img src='https://k11.kn3.net/8571418A6.gif' className='img-loading' alt=''/>
      <div class="lds-dual-ring"></div>
    </div>
  )
}
