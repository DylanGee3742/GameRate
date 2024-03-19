import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export function GameListContainer(props) {
  const games = props.filter;
  const gamesPerSlide = 4; // Adjust the number of games per slide as needed
  // Split games into sets based on the number of games per slide
  const gameSets = [];
  for (let i = 0; i < games.length; i += gamesPerSlide) {
    gameSets.push(games.slice(i, i + gamesPerSlide));
  }

  console.log(gameSets)

  return (
    <div className='container'>
      <div className="row m-3">
        <div className="col mt-2">
          <h2>{props.listTitle}</h2>
          <hr />
        </div>
        <div className="container">

          <div className="row m-2">
            <div className="col">
              <div id={props.gameCarouselID} className="carousel p-5" data-bs-interval="false">
                <div className="carousel-inner">
                  {gameSets.map((gameSet, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                      <div className="row">
                        {gameSet.map((game, gameIndex) => (
                          <NavLink key={gameIndex} to={`games/${game.id}`} gamePicture={game.game} gameTitle={game.title} className="col-md-3 mt-1">{game.game}{game.title}{game.id}</NavLink>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <button className="carousel-control-prev justify-content-start" type="button" data-bs-target={`#${props.gameCarouselID}`} data-bs-slide="prev">
                  <span className="carousel-control-prev-icon justify-content-start btn-dark mr-5" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next justify-content-end" type="button" data-bs-target={`#${props.gameCarouselID}`} data-bs-slide="next">
                  <span className="carousel-control-next-icon justify-content-end btn-dark" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}