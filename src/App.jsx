import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import ScrollToAnchor from "./ScrollToAnchor";

function App() {
  return (
    <BrowserRouter>
      <ScrollToAnchor />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
