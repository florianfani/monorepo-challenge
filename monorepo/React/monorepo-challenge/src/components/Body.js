import React, { useState } from 'react';

function Body({ onSelectOption }) {
  const options = ['Anti Wrinkle Treatment', 'Dermal Fillers', 'Secret RF', 'HarmonyCA', 'Facials', 'Growth Factors'];

  return (
    <div className="body">
      <ul>
        {options.map((option, index) => (
          <li key={index} style={{cursor: "pointer", listStyleType : "none", padding: "5px"}} onClick={() => onSelectOption(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Body;
