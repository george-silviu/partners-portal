import { Routes, Route } from "react-router-dom";
import "./App.css";
import { lazy } from "react";

//lazy loading  components navbar, sidebar, main-content
const Navbar = lazy(() => import("./components/navbar/navbar.component"));
const Sidebar = lazy(() => import("./components/sidebar/sidebar.component"));
const MainContent = lazy(() =>
  import("./components/main-content/main-content.component")
);

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <MainContent />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/contact" element={<div>Contact</div>} />
      </Routes>
    </div>
  );
}

export default App;
