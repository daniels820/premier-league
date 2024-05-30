import "./App.css";
import { Table } from "./views/TablePage";
import { HomePage } from "./views/HomePage";
import { TeamsPage } from "./views/TeamsPage";
import NavBar from "./components/navBar/NavBar";
import { Route, Routes } from "react-router-dom";
import { TeamInfoPage } from "./views/TeamInfoPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="teams" element={<TeamsPage />} />
        <Route path="table" element={<Table />} />
        <Route path="/team-profile/:teamId" element={<TeamInfoPage />} />
      </Routes>
    </div>
  );
}
export default App;
