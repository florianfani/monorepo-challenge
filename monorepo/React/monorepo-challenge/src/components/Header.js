import React from 'react';

function Header({ currentStep, onBackClick }) {
  return (
    <div className="header">
      <p>Step {currentStep} / 2</p>
      {currentStep === 2 && <button onClick={onBackClick}>Back</button>}
    </div>
  );
}

export default Header;
