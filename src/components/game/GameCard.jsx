import React from 'react'
import './GameCard.css'
import {Link} from 'react-router-dom'


function GameCard({game, deleteGame}) {
    return (
        <div className="GameCard">
            <Link to= {{pathname: `/${game.id}`}}>
                <h2> {game.name} </h2>
            </Link>
            <span> {game.rating} </span>
            <img className="game-picture" src={game.background_image} alt={game.name} />
             <button className="btn" onClick={() => deleteGame(game.id)}>
            Delete Game
            </button>     
        </div>            
    )
}

export default GameCard