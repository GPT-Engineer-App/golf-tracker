import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import ScoreTracking from "./pages/ScoreTracking.jsx";
import Friends from "./pages/Friends.jsx";
import Courses from "./pages/Courses.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/score-tracking" element={<ScoreTracking />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </Router>
  );
}

export default App;
