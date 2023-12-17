import { useState } from "react";

import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const validInput = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <>
      <Header />;
      <UserInput userInput={userInput} onChangeInput={handleChange} />;
      {validInput && <Results input={userInput} />}
      {!validInput && (
        <p className="center">Please add Duration greater than zero!</p>
      )}
    </>
  );
}

export default App;
