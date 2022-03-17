import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import HomePage from "./components/HomePage/HomePage";
import CreatePage from "./components/CreatePage/CreatePage";
import DogDetail from "./components/DetailPage/DogDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/dogs/:id" element={<DogDetail />} />
        <Route path="/dog" element={<CreatePage />} />
      </Routes>
    </div>
  );
}

export default App;
