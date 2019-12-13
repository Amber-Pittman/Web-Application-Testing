import React from "react";

export default function Dashboard ({
    setStrikes,
    strikes,
    balls, 
    setBalls,
    hits,
    setHits,
    player, 
    setPlayer
}) {

    return (
        <div>
            <h1>Dashboard</h1>

            <button onClick={() => setStrikes(strikes + 1)}>Add Strike</button>
            {strikes > 3 && (
                setStrikes(0),
                setPlayer("")
            )}

            <button onClick={() => setBalls(balls + 1)}>Add Ball</button>
            {balls > 4 && (
                setBalls(0),
                setPlayer("")
            )}

            <button onClick={() => setHits(hits + 1)}>Add Hit</button>
            {hits > 3 && (
                setHits(0),
                setPlayer("")
            )}

            <button onClick={() => strikes < 2 ? setStrikes(strikes + 1) 
                : setStrikes(strikes)}>Add Foul</button>

            <form type="submit">
                <h2>Send a Player to Bat!</h2>
                <input type="text"
                        value={player}
                        onChange={event => setPlayer(event.target.value)} />
            </form>
        </div>
    )
}