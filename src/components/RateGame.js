import React, { useState } from 'react'
import "./RateGameModuleStyle.css";

export default function RateGame() {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const [totalStars, setTotalStars] = useState(5);

    return (
        <div className='RateGameModule'>
            <h1>Your Rating</h1>
            {[...Array(totalStars)].map((star, index) => {
                const currentRating = index + 1;

                return (
                    <label key={index}>
                        <input
                            key={star}
                            type="radio"
                            name="rating"
                            value={currentRating}
                            onChange={() => setRating(currentRating)}
                            onClick={() => console.log(currentRating)}
                        />
                        <span
                            className="star"
                            style={{
                                color:
                                    currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9",
                            }}
                            onMouseEnter={() => setHover(currentRating)}
                            onMouseLeave={() => setHover(null)}
                        >
                            &#9733;
                        </span>
                    </label>
                );
            })}
            <br />
            <br />
        </div>
    );
}
