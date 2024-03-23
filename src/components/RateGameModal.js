import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import RateGame from './RateGame';
import '../styles/RateGameModalStyle.css';

export default function RateGameModal() {
  useEffect(()=>{
    console.log('hello')
    window.scrollTo(0, 0);
  }, [])

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
          </div>

        </div>
      </div>
    </div>
    </>
  )
}
