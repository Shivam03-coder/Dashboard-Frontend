import React from "react";
import { BrowserRouter } from "react-router-dom";
import Approutes from "./routes/Approutes";
import "./App.css"

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Approutes />
      </BrowserRouter>
    </div>
  );
};

export default App;
