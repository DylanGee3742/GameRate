import React from 'react'

export function GameCard(props) {
  return (
    <div className="container">
      <div>
        <img src="https://upload.wikimedia.org/wikipedia/en/f/f3/Call_of_Duty_%282003%29_cover.jpg" 
        className="img-fluid"
        alt="Game Cover" />
        Game Title {props.id}
        {props.filter}
        </div>
    </div>
    
  )
}