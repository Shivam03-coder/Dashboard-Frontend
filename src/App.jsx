import React from "react";
import { BrowserRouter } from "react-router-dom";
import Approutes from "./routes/Approutes";
import "./global.css"

const App = () => {
  return (
    <div className="App bg-primary-950">
      <BrowserRouter>
        <Approutes />
      </BrowserRouter>
    </div>
  );
};

export default App;
