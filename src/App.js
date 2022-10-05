import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BirthdayPage from "./pages/BirthdayPage";
import IndexPage from "./pages/IndexPage";
import SpinwheelPage from "./pages/SpinwheelPage";
import "./index.css";
import { createStore, StateMachineProvider } from "little-state-machine";

createStore({});

function App() {
  return (
    <StateMachineProvider>
      <Router>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/birthday" element={<BirthdayPage />} />
          <Route path="/spinwheel" element={<SpinwheelPage />} />
        </Routes>
      </Router>
    </StateMachineProvider>
  );
}

export default App;
