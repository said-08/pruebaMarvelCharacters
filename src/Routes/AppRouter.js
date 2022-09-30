import React from 'react'
// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Routes,
    Route    
  } from "react-router-dom";
import Details from '../Pages/Details/details';
import { Home } from '../Pages/home/home';
import { marvelRoutes } from './allRoutes';

export const AppRouter = () => {
  return (
    <Router>
        <div>
            <Routes>
                {marvelRoutes.map((item, i) =>(
                    <Route exact path={item.path} element={<item.component/>} key={i}></Route>
                    ))}
                    <Route path='/:id' element={<Details/>}></Route>
                {/* <Route element={<Home/>}/> */}
            </Routes>
        </div>
    </Router>
  );
}