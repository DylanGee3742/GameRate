import React, { useState } from 'react'
import { faSearch } from "react-icons";
import '../styles/SearchBar.css';


export function Search({ setResults, database }) {
    const [input, setInput] = useState("")

    const users = [
        {
            name: 'Mike'
        },
        {
            name: 'Jim'
        },
        {
            name: 'Bob'
        },
        {
            name: 'Bim'
        },
    ]

    const games = [
        {
            name: 'Cod'
        },
        {
            name: 'Fifa'
        },
        {
            name: 'Fallout'
        },
        {
            name: 'Fortnite'
        },
    ]

    const fetchData = (value) => {
        let found = [];
        if (database == 'friends') {
        for (let i = 0; i < users.length; i++) {
            if (value != '' && users[i].name.toLowerCase().startsWith(value.toLowerCase())) {
                found.push(users[i].name);
            } 
        }
    } else {
        for (let i = 0; i < games.length; i++) {
            if (value != '' && games[i].name.toLowerCase().startsWith(value.toLowerCase())) {
                found.push(games[i].name);
            } 
        }
    }
    
        setResults(found);
    }


    const handleChange = (value) => {
        console.log(value)
        setInput(value)
        fetchData(value)

    }

    return (
        <div className="input-wrapper">
            <faSearch id="search-icon" />
            <input
                placeholder="Type to search..."
                value={input}
                onChange={(e) => handleChange(e.target.value)}
            />
        </div>
    )
}
