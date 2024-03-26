import React from 'react'
import '../styles/SearchResults.css'
import { NavLink } from 'react-router-dom';
import SearchResultsList from './SearchResultsList';

export function SearchResults({ result, database }) {
  return (
    database === 'friends' ? (
      <NavLink to={`/friends/${result}`} className="search-result">
        {result}
      </NavLink>
    ) : (
      <NavLink  to={`/games/${result}`} className="search-result">
        {result}
      </NavLink>
    )
  );
}
