import { BrowserRouter, Route, Routes } from "react-router-dom";

import SpellCards from "./components/SpellCards";
import Landing from "./components/Landing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Landing />} />
        <Route path="/list" element={<SpellCards />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
