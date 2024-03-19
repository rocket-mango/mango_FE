import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FarmingInfoAll from "./test/farmingInfoHome";
import FarmingInfoById from "./test/farmingInfoById";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path = "/" Component={FarmingInfoAll}/>
          <Route path = "/farmingInfo/:fid" Component={FarmingInfoById}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;