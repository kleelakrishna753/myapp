import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './Login';
import Header from './Header'
import Content from './Content';
import Footer from './Footer';
import Cart from './Cart'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Signup from './Signup';

export default function App() {
    return(
        <>
          <Header></Header>
            <BrowserRouter>
                <Navbar></Navbar>
                <hr></hr>
                <Routes>
                    <Route index element={<Content/>} />
                    <Route path='content' element={<Content/>}/>
                    <Route path='cart' element={<Cart/>}/>
                    <Route path='login' element={<Login/>}/>
                    <Route path='signup' element={<Signup/>}/>
                </Routes>

            </BrowserRouter>

          <Footer></Footer>
        </>
    );
}
//<> </> is called a fragment. Intraditional practce it is used instead of div to act as a parent tag and saves additional resources div uses

