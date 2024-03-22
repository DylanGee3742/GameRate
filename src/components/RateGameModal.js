import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import RateGame from './RateGame';

export default function RateGameModal() {
  const buttonStyle = {
    background: 'none',
    border: 'none',
    padding: '0',
    font: 'inherit',
    cursor: 'pointer',
    /* Add any additional custom styles here */
  };


  return (
    <>
     <span role="button" className="d-inline-flex" data-bs-toggle="modal" data-bs-target="#ratingModal">
      <button style={buttonStyle} >
      <FontAwesomeIcon icon={regularStar} className="m-1" />
     </button>
     </span>


    <div className="modal fade" id="ratingModal" tabindex="-1" aria-labelledby="ratingModallLabel" aria-hidden="true">
      <div className="modal-dialog" >
        <div className="text-center modal-content">
          <div className="modal-header">
            <h1 className="modal-title" id="ratingModalLabel"></h1>

            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div class="modal-body">
            <RateGame />
          </div>

        </div>
      </div>
    </div>
    </>
  )
}
