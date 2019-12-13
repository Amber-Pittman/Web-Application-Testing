import React, { useState } from "react";

import Display from "./Components/Display";
import Dashboard from "./Components/Dashboard";

function App() {
    
    
    // Count Rules
    // balls and strikes reset to 0 when a player reaches 3 strikes or 
    // 4 balls.
    // balls and strikes reset to 0 when a hit is recorded.
    // a foul increases strikes up to 2. With no strikes, a foul makes 
    //  it 1 strike. With 1 strike, a foul makes it 2 strikes. With two 
    //  strikes a foul has no effect, count stays at 2 strikes.

   
    const [strikes, setStrikes] = useState(0); // strikes reset to 0
    const [balls, setBalls] = useState(0); // balls reset to 0
    const [outs, setOuts] = useState(0);

    const resetDisplay = () => {
        setStrikes(0);
        setBalls(0);
    }

    const addStrikes = () => {
        if(strikes === 2 && outs === 2) {
            clear()
        } else if(strikes === 2) {
            resetDisplay()
        } else {
            return setStrikes(strikes + 1)
        }
    }

    const addBall = () => {
        if(balls === 3) {
            setBalls(0)
            resetDisplay()
        } else {
            return setBalls(balls + 1)
        }
    }

    const addFoul = () => {
        if(balls === 2) {
            return strikes;
        } else {
            return setStrikes(strikes + 1)
        }
    }

    // Need to do outs to keep track of balls and strikes
    const addOuts = () => {
        if(outs === 2) {
            setOuts(0)
            resetDisplay()
        } else {
            setOuts(outs + 1)
            resetDisplay()
        }
    }


    return (
        <div>
            <div>
                <h1>Scoreboard</h1>
            </div>

            <div>
                <Display />
                <Dashboard />
            </div>
        </div>
    )
}

export default App;