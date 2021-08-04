import React from 'react';
import './Game.css';
import {Link} from 'react-router-dom';


function Game({game, handelDelete}) {
    return (
        <div className="GameCard" id="container">
            <Link to= {{pathname: `/${game.id}`}}>
                <h2> {game.name} </h2>
                 <span> {game.rating} </span>
            </Link>
            <img className="game-picture" src={game.background_image} alt={game.name} />
            <div className="btn-d">
             <button className="btn" onClick={() => handelDelete(game.id)}>
            Delete Game
            </button>   
            </div>  
        </div>            
    )
};

export default Game