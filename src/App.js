import React from "react";

import Intro from "./pages/Intro";

const App = () => {
  const name = ["힘찬이"];
  return (
    <React.Fragment>
      <Intro name={name} />
    </React.Fragment>
  );
};

export default App;
