import React, { useState } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setCurrentStep(2);
  };

  const handleBackClick = () => {
    setCurrentStep(1);
  };

  return (
    <div className="App">
      <Header currentStep={currentStep} onBackClick={handleBackClick} />
      {currentStep === 1 ? (
        <Body onSelectOption={handleSelectOption} />
      ) : (
        <div>
          <h2>Selected Option:</h2>
          <p>{selectedOption}</p>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
