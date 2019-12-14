import React, { useState } from "react";
import Dashboard from "../Dashboard/Dashboard";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export default function Display() {
    const [strikes, setStrikes] = useState(0);
    const [balls, setBalls] = useState(0);
    const [hits, setHits] = useState(0);
    const [player, setPlayer]= useLocalStorage("");

    return (
        <div>
            <h1> Display </h1>
            <h2> {player} is up to bat. </h2>
            <div>
                <h2> Number of strikes: {strikes} </h2>
                <h2> Number of balls: {balls} </h2>
                <h2> Number of hits: {hits} </h2>

                <Dashboard
                    setStrikes={setStrikes}
                    strikes={strikes}
                    balls={balls}
                    setBalls={setBalls}
                    hits={hits}
                    setHits={setHits}
                    player={player}
                    setPlayer={setPlayer} />
            </div>
        </div>
    )
}