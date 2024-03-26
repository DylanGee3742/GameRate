import React from 'react'
import { SearchResults } from './SearchResults'
import '../styles/SearchResultsList.css'

export default function SearchResultsList({results, database}) {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return <SearchResults result={result} key={id} database={database} />
      })}
    </div>
  )
}
