import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import AddSector from "./components/AddSector";
import AddOccupation from "./components/AddOccupation";
function App() {
  return (
    <div className="max-w-5xl mx-auto">
      <Header />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-occupation" element={<AddOccupation />} />
        <Route path="/add-sector" element={<AddSector />} />
      </Routes>
    </div>
  );
}

export default App;
