import { useState, useEffect } from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import './style/common.css';

import Header from './conponent/Header.js'
import List from './conponent/List.js'
import Detail from './conponent/Detail.js'
import OnCart from './conponent/OnCart.js'


export default function App() {

    return (
        <BrowserRouter>
            <Header />
            {/* { goods? JSON.stringify(goods) : "nothing" } */}
            <Routes>
                <Route exact path="/" element={ <List /> } />
                <Route path="/goods/:id" element={ <Detail /> } />
                <Route path="/OnCart" element={ <OnCart /> } />
            </Routes>
        </BrowserRouter>
    );

}