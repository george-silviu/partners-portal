import { Routes, Route } from "react-router-dom";

import { AppContainer } from "./app.styles";

import Login from "./pages/login/login.page";
import Register from "./pages/register/register.page";
import Header from "./components/header/header.component";
import Sidebar from "./components/sidebar/sidebar.component";
import Dashboard from "./pages/dashboard/dashboard.page";
import Partners from "./pages/partners/partners.page";
import Logo from "./components/logo/logo.component";
import Breadcrumb from "./components/breadcrumb/breadcrumb.component";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/*"
        element={
          <AppContainer>
            <Logo />
            <Header />
            <Sidebar />
            <Breadcrumb />
            <Routes>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="partners" element={<Partners />} />
              {/* Add more routes here */}
            </Routes>
          </AppContainer>
        }
      />
    </Routes>
  );
}

export default App;
