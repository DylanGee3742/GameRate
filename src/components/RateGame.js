import React, { useState } from 'react';
import "./RateGameModuleStyle.css";

export default function RateGame() {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const totalStars = 5;

    const handleRatingChange = (currentRating) => {
        setRating(currentRating);
        console.log(currentRating); // You can remove this line if not needed
    };

    return (
        <div className='RateGameModule'>
            <h1>Your Rating</h1>
            {[...Array(totalStars)].map((_, index) => {
                const currentRating = index + 1;

                return (
                    <label key={index}>
                        <input
                            type="radio"
                            name="rating"
                            value={currentRating}
                            onChange={() => handleRatingChange(currentRating)}
                        />
                        <span
                            className="star"
                            style={{
                                color: currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9",
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