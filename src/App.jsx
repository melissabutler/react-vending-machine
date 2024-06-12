import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import VendingMachine from "./VendingMachine"
import VendingMenu from './VendingMenu'
import Snack from './Snack'


import './App.css'

function App() {

  return (
    <div>
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<VendingMachine/>}/>
                    <Route path="/snack" element={<Snack snack="snack" description="A standard snack, kind of boring" imgurl="https://static.wikia.nocookie.net/amphibiapedia/images/9/92/RenderedDarcy.Caped.png/revision/latest?cb=20230302080551"/>}/>
                    <Route path="/cadi" element={<Snack snack="cadi" description="They're sure in there."/>}/>
                    <Route path="/mountain-dew" element={<Snack snack="mountain-dew" description="A mountain dew pickle is a strange concept on a good day..."/>}/>
                    <Route path="/shorts" element={<Snack snack="shorts" description="Perfect for adding to a communal soup"/>}/>
                    <Route path="/sling-shot" element={<Snack snack="sling-shot" description="Joanie why did you want this in here"/>}/>
                    <Route path="/trash-can" element={<Snack snack="trash-can" description="A place to store everything else you picked up from this vending machine."/>}/>
                </Routes>
            </BrowserRouter>
    </div>
    

  )
}

export default App
