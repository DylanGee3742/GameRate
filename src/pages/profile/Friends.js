import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Friends() {

  const friendProfilePic = {
    maxHeight: '1550px',
    width: '550px'
  }

  return (
    <>
      <div className='row border-bottom m-3'>
        <div className='col'>
          <h2 className='ms-3 mb-4'>Friends</h2>
        </div>
        <div className='col d-flex justify-content-end'>
          <p className="m-3 text-center">Find a Friend</p>
          <form className="mt-2 form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          </form>
        </div>
      </div>

      <ul className='list-group list-group list-unstyled mt-3 ms-3 me-3'>
        {[...Array(5)].map((_, index) => (
          <li key={index}>
            <div className="row d-flex ms-5 mb-3">
              <div className='col-1 d-flex align-items-center justify-content-end'>
                <NavLink to={`/friends/${index}`}> <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                  className="img-fluid p-0 rounded-circle friendsPic"
                  style={friendProfilePic}
                  alt="Game Cover" /></NavLink>
              </div>
              <div className='col'>
                <div className='row d-flex '>
                  <div className='col-1 d-flex'>
                    <p className='m-3 align-self-end'>Name</p>
                  </div>
                </div>
                <div className='row flex-row'>
                  <div className='col-2'>
                    <p className='m-3'>Followers: 69</p>
                  </div>
                  <div className='col'>
                    <p className='m-3 justify-content-start'>Followers: 75</p>
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </li>
        ))}
      </ul>
    </>
  )
}