import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import RateGame from './RateGame';
import '../styles/RateGameModalStyle.css';

export default function RateGameModal() {
  const [currentReview, setCurrentReview] = useState('')

  const handleReview = (e) => {
    // This will post currentReview to backend
    e.preventDefault()
    console.log(currentReview)
}

  return (
    <>
      <span role="button" className="d-inline-flex" data-bs-toggle="modal" data-bs-target="#ratingModal">
        <button className='buttonStyle'>
          <FontAwesomeIcon icon={regularStar} className="m-1" />
        </button>
      </span>


      <div className="modal fade" id="ratingModal" tabIndex="-1" aria-labelledby="ratingModallLabel" aria-hidden="true">
        <div className="modal-dialog" >
          <div className="text-center modal-content">
            <div className="modal-header">
              <h1 className="modal-title" id="ratingModalLabel"></h1>

              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className="modal-body">
              <RateGame />
              <hr />
              <h4>Review</h4>
              <form className="form-group" onSubmit={handleReview}>
                <div>
                  <textarea 
                  className="form-control" 
                  id="reviewText" 
                  rows="3"
                  value={currentReview}
                  onChange={(e) => setCurrentReview(e.target.value)}
                  >               
                  </textarea>
                </div>
                <button type="submit" className="btn btn-secondary mt-3" data-bs-dismiss="modal">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
