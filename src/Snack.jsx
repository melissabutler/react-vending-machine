import React from "react";
import { Link } from "react-router-dom";

function Snack( {snack, imgurl="", description = ""} ) {
    return (
        <div>
            <h1> {snack}</h1>
            <img src={imgurl}/>
            <h3>{description}</h3>
            <Link to="/">Back to Vending Machine</Link>
        </div>
    )
}

export default Snack;