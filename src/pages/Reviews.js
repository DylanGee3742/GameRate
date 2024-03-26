import React from 'react'
import { useParams, NavLink } from 'react-router-dom'

export default function Reviews() {
    const { id } = useParams()

    const friendProfilePic = {
        maxHeight: '1550px',
        width: '550px'
    }
    const rating = 3


    return (
        <div>
            <h4>Reviews {id}</h4>
            <ul className='list-group list-group list-unstyled mt-3 ms-3 me-3'>
                {[...Array(5)].map((_, index) => (
                    <li key={index}>
                        <div className="row d-flex ms-5 mb-3 ">
                            <div className='col-1 d-flex align-items-center justify-content-end'>
                                <NavLink to={`/friends/${index}`}> <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                                    className="img-fluid p-0 rounded-circle friendsPic"
                                    style={friendProfilePic}
                                    alt="Game Cover" /></NavLink>
                            </div>
                            <div className='col'>
                                <div className='row d-flex align-items-center'>
                                    <div className='col pe-0 me-0'>
                                        <p className='mt-3 p-0'>Name</p>
                                    </div>

                                    <div className='col justify-content-start p-0'>
                                        <ul className='list-group list-group-horizontal list-unstyled ms-2'>
                                            {Array.from({ length: rating }).map((_, index) => (
                                                <li className='text-decoration-none' key={index}>
                                                    <span>&#9733;</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className='col'></div>
                                    <div className='col'></div>
                                    <div className='col'></div>
                                    <div className='col'></div>
                                    <div className='col'></div>
                                    <div className='col'></div>
                                    <div className='col'></div>
                                </div>

                                <div className='row d-flex'>
                                    <p>In "Echoes of Eternity," embark on an epic journey through the vast, mystical lands of Aetheria, where ancient prophecies and forgotten magic intertwine. As a brave adventurer chosen by fate, you must uncover the truth behind the mysterious disappearance of the legendary artifact known as the Orb of Eternity. Traverse treacherous landscapes, from enchanted forests to desolate ruins, each teeming with secrets and dangers.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <hr />
                    </li>
                ))}
            </ul>
        </div>
    )
}
