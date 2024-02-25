import React, { useState } from 'react'
import { GameCard } from '../components/GameCard'
import GamesFiltered from '../components/GamesFiltered'


export function Games() {
  const [filter, setFilter] = useState("");

  const handleSelectChange = (e) => {
    setFilter(e.target.value)
  };

  return (
    <>
      <div className='container'>
        <div className="row align-items-end">
          <div className="col-1">
            <p>BROWSE</p>
          </div>
          <div className="col d-flex" >
            <nav className="navbar navbar-expand navbar-light bg-light">
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item px-2">
                    <div class="dropdown">
                      <div className="col nav-link dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Year
                      </div>
                      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#">Games</a></li>
                        <li><a class="dropdown-item" href="#">Reviews</a></li>
                        <li><a class="dropdown-item" href="#">Gamelist</a></li>
                        <li><a class="dropdown-item" href="#">Likes</a></li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item  px-2">
                    <div class="dropdown">
                      <div className="col nav-link dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Rating
                      </div>
                      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#">Games</a></li>
                        <li><a class="dropdown-item" href="#">Reviews</a></li>
                        <li><a class="dropdown-item" href="#">Gamelist</a></li>
                        <li><a class="dropdown-item" href="#">Likes</a></li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item  px-2">
                    <div class="dropdown">
                      <div className="col nav-link dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Genre
                      </div>
                      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#">Games</a></li>
                        <li><a class="dropdown-item" href="#">Reviews</a></li>
                        <li><a class="dropdown-item" href="#">Gamelist</a></li>
                        <li><a class="dropdown-item" href="#">Likes</a></li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item px-2">
                    <div class="dropdown">
                      <div className="col nav-link dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Popular
                      </div>
                      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#">Games</a></li>
                        <li><a class="dropdown-item" href="#">Reviews</a></li>
                        <li><a class="dropdown-item" href="#">Gamelist</a></li>
                        <li><a class="dropdown-item" href="#">Likes</a></li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item px-2">
                    <div class="dropdown">
                      <div className="col nav-link dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Platform
                      </div>
                      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <select class="dropdown-menu" aria-labelledby="dropdownMenuButton1" value={filter} onChange={handleSelectChange}>
                          <option value="" class="dropdown-item">New Releases</option>
                          <option value="option1">Option 1</option>
                          <option value="option2">Option 2</option>
                          <option value="option3">Option 3</option>
                        </select>
                      </ul>
                    </div>
                  </li>

                  <li className="nav-item px-2">
                    <div className="dropdown">
                      <div className="col nav-link dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Other
                      </div>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonOther">
                        <li><button className="dropdown-item" onClick={() => setFilter("New Releases")}>New Releases</button></li>
                        <li><button className="dropdown-item" onClick={() => setFilter("Upcoming Events")}>Upcoming Events</button></li>
                        <li><button className="dropdown-item" onClick={() => setFilter("Special Offers")}>Special Offers</button></li>
                      </ul>
                    </div>
                  </li>

                </ul>
              </div>
            </nav>
            <p className="m-3">FIND A GAME</p>
            <form className="mt-2 form-inline col">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            </form>
          </div>
        </div>
        <hr />

        <div className="row">
          <GamesFiltered filter={filter} filterTitle={filter}/>
        </div>

      </div>
    </>
  )
}
