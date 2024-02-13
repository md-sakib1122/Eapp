import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import Nav from './component/nav'
import { Route, Routes } from 'react-router-dom'
import Home from './component/home'
import About from './component/about'
import Contact from './component/contact'
import Product from './component/product'
import Login from './component/Auth/login'
import Signup from './component/Auth/signUp'
import Scrool from './component/cardScrool'
import Lpc from './component/lpc'
export function App() {

  const cards = [
    <div key={1} className="card">Card 1</div>,
    <div key={2} className="card">Card 2</div>,
    <div key={3} className="card">Card 3</div>,
    <div key={4} className="card">Card 4</div>,
    <div key={5} className="card">Card 5</div>,
    <div key={6} className="card">Card 6</div>
  ];


  return (
    <div >
      <Nav/>

       <Routes>
           <Route path='/'  element={<Home/>} />
           <Route path='/about'  element={<About/>} />
           <Route path='/contact'  element={<Contact/>} />
           <Route path='/product'  element={<Product/>} />
           <Route path='/login' element={<Login/>} />
           <Route path='/signup' element={<Signup/>} />
       </Routes>
       
       
   
    </div>

  )
  }