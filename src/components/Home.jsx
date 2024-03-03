import React from 'react'
import { Outlet } from 'react-router-dom';
import {Header,Footer} from './index';
const Home = () => {
 
  return (
    <div className='md:px-12 px-2'>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Home
