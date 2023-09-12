import React, { useState } from 'react';

function Body({ onSelectOption }) {
  const options = ['Anti Wrinkle Treatment', 'Dermal Fillers', 'Secret RF', 'HarmonyCA, Facials, Growth Factors'];

  return (
    <div className="body">
      <h2>Select an Option:</h2>
      <ul>
        {options.map((option, index) => (
          <li key={index} style={{cursor: "pointer"}} onClick={() => onSelectOption(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Body;
