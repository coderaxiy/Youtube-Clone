import React, { memo } from 'react'
import { Outlet } from 'react-router-dom';
import './body.css'

const Body = memo(() => {
  return (
    <div className='Wrap'><Outlet /></div>
  )
});

export default Body;