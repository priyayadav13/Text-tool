import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const [modeText, setModeText] = useState("Enable Dark Mode");

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "Dark Mode";
      setModeText("Enable Light Mode");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      setModeText("Enable Dark Mode");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="Textutils"
          aboutText="About Textutils"
          mode={mode}
          modeText={modeText}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container  my-3"></div>
        <Routes>
          <Route exact path="/about" element={<About mode={mode} />}></Route>
          <Route
            exact
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Enter text below"
                mode={mode}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
