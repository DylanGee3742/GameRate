import React from 'react'

export default function EditDetail({ username, password, setUsername, setPassword }) {

    const handleSubmit = (e) => {
        e.preventDefault()

        sessionStorage.setItem('username', username)
    }

    return (
        <>
            <span role="button" className="pe-auto col nav-link" data-bs-toggle="modal" data-bs-target="#editDetailsModal">
                Edit Details
            </span>

            <div className="modal fade" id="editDetailsModal" tabIndex="-1" aria-labelledby="editDetailsModallLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editDetailsModalLabel">Edit Details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <form id="editDetailsForm" className="form-inline" onSubmit={handleSubmit}>
                                <input className="form-control mr-sm-2 mb-3"
                                    id="usernameEditDetails"
                                    type="text"
                                    placeholder="Username"
                                    aria-label="Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <input className="form-control mr-sm-2 mb-3"
                                    id="passwordEditDetails"
                                    type="password"
                                    placeholder="Password"
                                    aria-label="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Submit Changes</button>
                            </form>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
