import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import Catalog from '../../pages/Catalog'
import Library from '../../pages/Library'

const Main = () => {
  return (
    <Routes>
        <Route 
           path='/'
           element={<Home/>} 
        />
        <Route 
           path='catalog'
           element={<Catalog/>} 
        />
        <Route 
           path='library'
           element={<Library/>} 
        />
    </Routes>
  )
}

export default Main