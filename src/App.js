import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div
        className="navbar"
        style={{
          backgroundColor: "red",
          height: "50px",
          position: "fixed",
          top: "0",
          width: "100%",
          zIndex: "1",
        }}
      >
        warap
      </div>
      <div
        className="sidebar"
        style={{
          backgroundColor: "blue",
          width: "200px",
          height: "calc(100% - 50px)",
          position: "fixed",
          top: "50px",
          left: "0",
          zIndex: "1",
        }}
      ></div>
      <div
        className="main-content"
        style={{
          backgroundColor: "yellow",
          marginLeft: "200px",
          marginTop: "50px",
          width: "calc(100% - 200px)",
          height: "calc(100% - 50px)",
        }}
      ></div>
    </div>
  );
}

export default App;
