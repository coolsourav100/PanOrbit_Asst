import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../Page/Home/Home';
import Dashboard from '../Page/Dashboard';

const Router = () => {
  return (
    <Routes>
    {/*For Home*/}
        <Route path='/' element={<Home/>}/>
        {/*For DashBoard*/}
        <Route path='/dashboard/user/:id' element={<Dashboard/>}/>
    </Routes>
  )
}

export default Router