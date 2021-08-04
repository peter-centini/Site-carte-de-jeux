import React from 'react';
import axios from 'axios';
import Game from '../components/game/Game';
import {useState, useEffect} from 'react';
import './GameList.css'

function GameList() {

    const [games, setGames] = useState([]);
    const [rating, setRating] = useState(false)
    
    useEffect(() => {
        axios
        .get('https://apis.wilders.dev/wild-games/games/')
        .then((res) => res.data)
        .then ((data) => setGames(data))
     }, [])

    const handelDelete = (id) =>{
        setGames(games.filter(game => game.id !== id))
    }
        
    return (
        
        <div className="GameList">
                <button className="filter-bnt" onClick={() => setRating(!rating)}>
                {rating ? 'Note < 4': 'Note > 4'}
            </button>
            
            <div>
            {!rating ? games.map((game) => ( <div key={game.id}> 
            <Game game={game} handelDelete={handelDelete}/>
                </div>
            ))
            : games.filter((game) => game.rating < 4 ).map((game) => (
            <div key={game.id}>
                <Game game={game} handelDelete={handelDelete}/>
                </div>
            ))}
            </div>
        </div>
     ) 
    
};

export default GameList
