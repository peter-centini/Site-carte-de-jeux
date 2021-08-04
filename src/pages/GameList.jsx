import React from 'react';
import axios from 'axios';
import Game from '../components/game/Game';
import {useState, useEffect} from 'react';

function GameList() {

    const [games, setGames] = useState([]);
    const {rating, setrating} = useState(false)
    
    useEffect(() => {
        axios
        .get('https://apis.wilders.dev/wild-games/games/')
        .then((res) => res.data)
        .then ((data) => setGames(data))
        console.log(setGames)
        
     }, [])

    const handleDelete = (id) =>{
        setGames(games.filter(game => game.id !== id))
    }
    // const rating = (rating) =>{
    //     setrating (games.filter(game => game.rating !== rating))
    // }
        
    return (
        <div className="GameList">
            {games.map((game) => (
                <div key={game.id}>
                    <Game game={game} deleteGame = {handleDelete} />
                </div>
            ))}
            <button className="filter-bnt" onclick={() => setrating(!rating)}>
                {rating ? 'toute les notes': 'note sup a 4'}
            </button>
            <div>{!rating ? games.map((game) => ( <div key={game.id}> <Game game={game}/>
                </div>
            ))
            : games.filter((game) => game.rating > 4.2).map((game) => (
            <div key={game.id}>
                <Game game={game}/>
                </div>
            ))}
            </div>
        </div>
     ) 
    
};

export default GameList
