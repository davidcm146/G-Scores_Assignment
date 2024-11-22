import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Layout from "./layouts/Layout";
import Dashboard from "./pages/Dashboard"
import SearchScores from "./pages/SearchScores";
import Reports from "./pages/Reports"
import Top10Students from "./pages/Top10Students";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Layout Route */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="searchscores" element={<SearchScores />} />
          <Route path="reports" element={<Reports />} />
          <Route path="top10students" element={<Top10Students />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App
