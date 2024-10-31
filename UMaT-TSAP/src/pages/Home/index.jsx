import React, { useState } from "react";
import Header from "./Header";

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
       <Header />
      <Container />
       
      <NewFooter />
    </div>
  );
}

export default Home;
