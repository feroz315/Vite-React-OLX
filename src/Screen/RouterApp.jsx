import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Home from './Home';
import Details from './Details';


function RouterApp() {
  return (

    <Routes>
    <Route index element={<Home />}/>
    <Route path='/productDetails/:id' element={<Details />}/>


    </Routes>
  )
}

export default RouterApp