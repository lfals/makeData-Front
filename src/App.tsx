import "./assets/App.less";
import { Route, Routes } from "react-router-dom";
import { Docs, Home } from "@views";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/docs" element={<Docs />} />
    </Routes>
  );
}

export default App;
