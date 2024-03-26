import React, { useState } from 'react'
import GamesFiltered from '../components/GamesFiltered'
import { FilterDropdown } from '../components/FilterDropdown';
import { SearchBar } from './../components/SearchBar';


export function Games() {
  const [filter, setFilter] = useState("");

  // Hard coded for now 
  const filterOptions = {
    Year: ["2020's", "2010's", "2000's", "1990's", "1980's"],
    Rating: ["5 Star", "4 Star", "3 Star", "2 Star", "1 Star"],
    Genre: ["Shooters", "RPG", "Strategy", "Co-op"],
    Popular: ["This Week", "This Month", "This Year", "All Time"],
    Platform: ["PS5", "XBOX", "PC", "Nintendo"],
    Other: ["New Releases", "Upcoming Events", "Special Offers"]
  };

  return (
    <>
      {/* Once I have the data map out the values for dropdowns to filter by filters.map etc */}

        <div className="row align-items-end">
          <div className="col d-flex justify-content-center" >

            <nav className="navbar navbar-expand navbar-light bg-light">
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  {/* Maps out all the dropdown categories and their options */}
                  {Object.keys(filterOptions).map((category, index) => (
                    <FilterDropdown key={index} title={category} options={filterOptions[category]} setFilter={setFilter}  />
                  ))}
                </ul>
              </div>
            </nav>
            <SearchBar buttonName={'Find A Game'}/>
            </div>
            
        </div>
        <hr />

        <div className="row">
          <GamesFiltered filter={filter} filterTitle={filter} />
        </div>

    </>
  )
}
