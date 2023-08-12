import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import EditorSpace from "./Components/EditorSpace";
import Alert from "./Components/Alert";
import { Route, Routes } from "react-router-dom";
import About from "./Components/About";

function App() {
  const [title, setTitle] = useState("Text Editor");
  const [menuName, setMenuName] = useState("Editor Page");
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const changeDocumentBackgroundColor = (data) => {
    console.log(typeof data, data, "logs data from child"); // LOGS DATA FROM CHILD
    document.body.style.backgroundColor = data;
  };

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#094c59";
      showAlert("Dark mode is enable", "success");
      document.title = "Text Editor - Dark mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enable", "success");
      document.title = "Text Editor - Light mode";
    }
  };

  return (
    <>
      <Navbar
        title={title}
        menuName={menuName}
        mode={mode}
        toggleMode={toggleMode}
        changeDocumentBackgroundColor={changeDocumentBackgroundColor}
      />
      <div className="my-1">
        <Alert alert={alert} />
      </div>

      <Routes>
        <Route
          exact
          path="/editorSpace"
          element={
            <EditorSpace
              heading="Try TextUtils - word counter, character counter, remove extra spaces"
              mode={mode}
              showAlert={showAlert}
            />
          }
        />
        <Route exact path="/about" element={<About mode={mode} />} />
      </Routes>
    </>
  );
}

export default App;
