import React from 'react'
import Header from '../header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    
  return (
    <div className='flex flex-col justify-center'>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default Layout