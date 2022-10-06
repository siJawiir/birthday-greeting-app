import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BirthdayPage from "./pages/BirthdayPage";
import IndexPage from "./pages/IndexPage";
import SpinwheelPage from "./pages/SpinwheelPage";
import "./index.css";
import { createStore, StateMachineProvider } from "little-state-machine";
import DarkMode from "./components/DarkMode";

createStore({});

function App() {
  return (
    <div className="w-screen h-screen dark:bg-gray-900 flex flex-col items-center justify-center">
      <DarkMode />
      <StateMachineProvider>
        <Router>
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/birthday" element={<BirthdayPage />} />
            <Route path="/spinwheel" element={<SpinwheelPage />} />
          </Routes>
        </Router>
      </StateMachineProvider>
    </div>
  );
}

export default App;
