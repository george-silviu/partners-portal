import React from "react";

import UserAccount from "../user-account/user-account.component";

import "./header.styles.scss";

const Header = () => {
  return (
    <div className="header">
      <UserAccount />
    </div>
  );
};

export default Header;
