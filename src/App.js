import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Lookbook from './pages/Lookbook'
import Men from './pages/Men'
import NotFound from './pages/NotFound'
import Sale from './pages/Sale'
import Story from './pages/Story'
import Women from './pages/Women'
import MensDetails from './pages/MensDetails'

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='' element={<Layout/>}>

    <Route index element={<Home/>}></Route>
    <Route path='men' element={<Men/>}></Route>
    <Route path='women' element={<Women/>}></Route>
    <Route path='collection' element={<Collection/>}></Route>
    <Route path='lookbook' element={<Lookbook/>}></Route>
    <Route path='sale' element={<Sale/>}></Route>
    <Route path='story' element={<Story/>}></Route>
    <Route path='Contact' element={<Contact/>}></Route>
    <Route path='MensDetails' element={<MensDetails/>}></Route>



    </Route>
    <Route path='*' element={<NotFound/>}></Route>
    


    </Routes>
    
    
    
    
    </BrowserRouter>
    
    
    
    
    </>

  )
}
