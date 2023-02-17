import { useState } from "react";
import { Approutes } from "./routes";
import GlobalStyles from "./styles/GlobalStyles";
import { ToastContainer } from "react-toast";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Approutes />
      <ToastContainer position="top-right" delay={3000} />
    </div>
  );
}

export default App;
