//import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import Alert from "./Components/Alert";
//import About from "./Components/About";
//import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  ///return <div className="blank">Lovely</div>;
  //let name = "Subham";
  const [mode, setMode] = useState("light"); //default value, checkmif dark mode enabled or not
  const [alert, setAlert] = useState("null");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils-DarkMode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark mode has been enabled", "success");
    }
  };

  return (
    <>
      {
        // <Navbar title="TextutilsSubh" aboutText="About textUtils" />}
      }
      {/* <BrowserRouter>    */}
      <Navbar title="TextUtilsSubham" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/*  <Routes>
            <Route exact path="/about" element={<About />} />
          </Routes>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter  text to analyze"
                  mode={mode}
                />
              }
            />
            </Routes>     */}
        <TextForm
          showAlert={showAlert}
          heading="Enter  text to analyze"
          mode={mode}
        />
      </div>
      {
        //  </BrowserRouter>
      }
    </>
  );
}

export default App;
