import { AppContainer } from "./app.layout.styles";

import { Outlet } from "react-router-dom";

import Logo from "../logo/logo.component";
import Header from "../header/header.component";
import Sidebar from "../sidebar/sidebar.component";
import Breadcrumb from "../breadcrumb/breadcrumb.component";

const AppLayout = () => {
  return (
    <AppContainer>
      <Logo />
      <Header />
      <Sidebar />
      <Breadcrumb />
      <Outlet /> {/* This is where the nested routes will render */}
    </AppContainer>
  );
};

export default AppLayout;
