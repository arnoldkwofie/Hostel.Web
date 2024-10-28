import React, { useState } from "react";

import Container from "./Container";
import SelectionCheckBox from "./SelectionCheckBox";
import NewFooter from "./Footer";

function Home() {
  // State to manage dropdown visibility
 

  const [focusedInput, setFocusedInput] = useState(null);

  const handleFocus = (inputIndex) => {
    setFocusedInput(inputIndex);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };




  return (
    <div className="overall-container">
      <Container />
        <div className="md:flex w-full justify-center w-full mt-20 pl-[10%] pr-[10%] mb-20"></div>
      <NewFooter />
    </div>
  );
}

export default Home;
