import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import NavBar from '../components/NavBar/NavBar'
import Products from '../pages/Products'
import Item from "../pages/Item"
import Category from '../pages/Category'
import Carts from '../pages/Carts'
import Footer from '../components/Footer/Footer'


const MainRauter = () => {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route exact path='/products' element={<Products/>} />
                <Route exact path='/category/:categoryid' element={<Category/>} />
                <Route exact path='/products/:productsID' element={<Item/>} />
                <Route exact path='/carts' element={<Carts/>} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default MainRauter