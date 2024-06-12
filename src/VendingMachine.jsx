import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import vendingMenu from "./VendingMenu.jsx"
import Snack from "./Snack";
import VendingMenu from "./VendingMenu.jsx";
import Home from './Home'

function VendingMachine() {
    return (
        <div>
            <h1 className="Vending-title">Vending Machine</h1>
            <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSf8Sy6-lOrSciJbNAp-j7oZvQgEtynt7BGEf9AP9KJ5iYdIzLGqSQKhMEWEkOZGvAvypYfBZ4qJ6JM5cHPRCNpN-8RVQvQNBJ5X5RDACuAuBUeG9OV7VMD&usqp=CAE"/>
            <h3 className="Vending-desc">That's odd, this wasn't here yesterday. Pick a snack?</h3>
            <div className="Vending-menu">
                <VendingMenu />
            </div>
            
            
            
            </div>
        
    )
}

export default VendingMachine;