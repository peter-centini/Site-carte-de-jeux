import React from 'react'
import {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


function GameDetails(props) {
    const [trailer, settrailer] = useState();
    const gameId = props.match.params.id


    useEffect(() => {
        axios.get(`https://apis.wilders.dev/wild-games/games/${gameId}`)
        .then((res) =>{
            settrailer(res.data.clip.clip)
        })
        
    }, [gameId])

    return (
        <div className="GameDatails">
            <span> Clip Videos :</span>
            <video control src={traiter}/>
            <link to={{pathname: '/'}}>Retour vers l'acceuil</link>
            
        </div>
    )
}

export default GameDetails
