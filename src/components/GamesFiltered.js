import React from 'react'
import { listFill } from './../functions/listFill';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar, faHeart as solidHeart, faGamepad as gamePad } from '@fortawesome/free-solid-svg-icons';

export default function GamesFiltered(props) {
    const gameObj = listFill(props.filter)
    const title = gameObj[0].title
    const showRating = props.showRating
    const rating = 3
    const liked = props.liked


    return (
        <>
            <h1 className='my-3'>{title}</h1>
            <hr />
            <div className="row d-flex overflow-auto">
                {/* flex-wrap makes it start a new line, d-flex makes it inline */}
                <div className='col d-flex flex-wrap'>
                    {gameObj.map((game, gameIndex) => (
                        <NavLink key={gameIndex} to={`/games/${game.id}`} gamepicture={game.game} gametitle={game.title} className="col-md-3 mt-1 text-decoration-none">
                            {game.game}
                            <div className='d-flex'>
                                <p className='me-2'>{game.title}</p>
                                <p>{game.id}</p>
                                {showRating && (
                                    <ul className='list-group list-group-horizontal list-unstyled ms-2'>
                                        {Array.from({ length: rating }).map((_, index) => (
                                            <li className='text-decoration-none' key={index}>
                                                <span>&#9733;</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                 {liked && <FontAwesomeIcon icon={solidHeart} className=" redHeart m-1" />}
                            </div>       
                        </NavLink>
                    ))}
                </div>
            </div>
        </>
    )
}