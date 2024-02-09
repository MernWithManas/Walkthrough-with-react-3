import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './Home'
import { SinglePhoto } from './SinglePhoto'




function CustomRoute() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/:id" element={<SinglePhoto/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default CustomRoute