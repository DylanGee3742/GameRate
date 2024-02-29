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
    {/* Once I have the data map out the values for dropdowns to filter by filters.map etc */}
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
                    <div className="dropdown">
                      <div className="col nav-link dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Year
                      </div>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonOther">
                        <li><button className="dropdown-item" onClick={() => setFilter("2020's")}>2020's</button></li>
                        <li><button className="dropdown-item" onClick={() => setFilter("2010's")}>2010's</button></li>
                        <li><button className="dropdown-item" onClick={() => setFilter("2000's")}>2000's</button></li>
                        <li><button className="dropdown-item" onClick={() => setFilter("1990's")}>1990's</button></li>
                        <li><button className="dropdown-item" onClick={() => setFilter("1980's")}>1980's</button></li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item px-2">
                    <div className="dropdown">
                      <div className="col nav-link dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Rating
                      </div>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonOther">
                        <li><button className="dropdown-item" onClick={() => setFilter("5 Star")}>5 Star</button></li>
                        <li><button className="dropdown-item" onClick={() => setFilter("4 Star")}>4 Star</button></li>
                        <li><button className="dropdown-item" onClick={() => setFilter("3 Star")}>3 Star</button></li>
                        <li><button className="dropdown-item" onClick={() => setFilter("2 Star")}>2 Star</button></li>
                        <li><button className="dropdown-item" onClick={() => setFilter("1 Star")}>1 Star</button></li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item px-2">
                    <div className="dropdown">
                      <div className="col nav-link dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Genre
                      </div>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonOther">
                        <li><button className="dropdown-item" onClick={() => setFilter("Shooters")}>Shooters</button></li>
                        <li><button className="dropdown-item" onClick={() => setFilter("RPG")}>RPG</button></li>
                        <li><button className="dropdown-item" onClick={() => setFilter("Strategy")}>Strategy</button></li>
                        <li><button className="dropdown-item" onClick={() => setFilter("Co-op")}>Co-op</button></li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item px-2">
                    <div className="dropdown">
                      <div className="col nav-link dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Popular
                      </div>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonOther">
                        <li><button className="dropdown-item" onClick={() => setFilter("This Week")}>This Week</button></li>
                        <li><button className="dropdown-item" onClick={() => setFilter("This Month")}>This Month</button></li>
                        <li><button className="dropdown-item" onClick={() => setFilter("This Year")}>This Year</button></li>
                        <li><button className="dropdown-item" onClick={() => setFilter("All Time")}>All Time</button></li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item px-2">
                    <div className="dropdown">
                      <div className="col nav-link dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Platform
                      </div>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonOther">
                        <li><button className="dropdown-item" onClick={() => setFilter("PS5")}>PS5</button></li>
                        <li><button className="dropdown-item" onClick={() => setFilter("XBOX")}>XBOX</button></li>
                        <li><button className="dropdown-item" onClick={() => setFilter("PC")}>PC</button></li>
                        <li><button className="dropdown-item" onClick={() => setFilter("Nintendo")}>Nintendo</button></li>
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
