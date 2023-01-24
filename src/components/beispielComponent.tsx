import React from "react";

export function BeispielComponent () {
    // Kopf Teil: Information, Variablen, Funktionen
    let name = "Giancarlo"

    
    const onclick = ()=> {
        // Mach etwas
    }

    // Body Teil: html &
    return (
        <div>
            <h1>{name}</h1>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <button onClick={onclick}>Click Me</button>
        </div>
    )
}