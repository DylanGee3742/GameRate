import React, { useState } from 'react';

export function FilterDropdown({ title, options, setFilter }) {
  return (
    <li className="nav-item px-2">
      <div className="dropdown">
        <div className="col nav-link dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          {title}
        </div>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonOther">
            {/* Creates a dropdown item for each catgeory - setFilter sets state which tells app what to filter games by */}
          {options.map((option, index) => (
            <li key={index}>
              <button className="dropdown-item" onClick={() => setFilter(option)}>{option}</button>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}