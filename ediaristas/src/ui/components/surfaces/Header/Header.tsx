import React from "react";
import { HeaderAppBar, HeaderLogo } from "./Header.style";
import { Toolbar } from "@material-ui/core";

const Header: React.FC = () => {
  return (
    <HeaderAppBar position={"sticky"}>
        <Toolbar>
            <HeaderLogo src={'/img/logos/logo.svg'} alt=/>
        </Toolbar>
    </HeaderAppBar>
  );
};

export default Header;
