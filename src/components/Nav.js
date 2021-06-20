import React, { useState } from "react";
import Sticky from "react-stickynode";
import PropTypes from "prop-types";
import styled from "styled-components";

import logo from "../images/Logo-Felrro-curvas.png";

import NavLinkList, { NavLink } from "./NavLinkList";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

import { Hidden } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "./ModernMobileDrawer";

import SearchInput from "../components/SearchInput";

const Nav = ({ showsBorder, sticky, isHome, backgroundColor, selected }) => {
  const links = [
    {
      title: "HOME",
      url: "/",
      selected: selected === "HOME",
    },
    {
      title: "EMPRESA",
      url: "/empresa",
      selected: selected === "EMPRESA",
    },
    {
      title: "PRODUCTOS",
      url: "/productos",
      selected: selected === "PRODUCTOS",
    },
    {
      title: "CALIDAD",
      url: "/calidad",
      selected: selected === "CALIDAD",
    },
    {
      title: "CONTACTO",
      url: "/contacto",
      selected: selected === "CONTACTO",
    },
  ];

  const [drawerVisible, setDrawerVisible] = useState(false);

  const handleDrawerButtonClick = () => {
    setDrawerVisible(true);
  };

  const handleDrawerRequestClose = () => {
    setDrawerVisible(false);
  };

  const CloseButton = (
    <IconButton
      edge="end"
      color="inherit"
      aria-label="menu"
      onClick={handleDrawerRequestClose}
    >
      <CloseIcon />
    </IconButton>
  );

  const BurgerMenu = (
    <IconButton edge="end" aria-label="menu" onClick={handleDrawerButtonClick}>
      <MenuIcon />
    </IconButton>
  );

  return (
    <Sticky enabled={sticky} innerZ={999}>
      <Wrapper showsBorder={showsBorder} backgroundColor={backgroundColor}>
        <LogoLink href="https://felrro.com.ar/">
          <Logo src={logo} alt="logo" />
        </LogoLink>

        <RightContent>
          <Hidden smDown>
            <SearchInput setDrawer={() => {}} />
            <NavLinkList links={links} />
          </Hidden>

          <LoggedInBar>
            <Hidden mdUp>{drawerVisible ? CloseButton : BurgerMenu}</Hidden>
          </LoggedInBar>
        </RightContent>
        <Hidden mdUp>
          <Drawer
            visible={drawerVisible}
            onRequestClose={handleDrawerRequestClose}
            items={links}
          />
        </Hidden>
      </Wrapper>
    </Sticky>
  );
};

/**
 * Constants
 */

Nav.HEIGHT = 100;

/**
 * PropTypes
 */

Nav.propTypes = {
  showsBorder: PropTypes.bool,
  sticky: PropTypes.bool,
  isHome: PropTypes.bool,
  Logo: PropTypes.func,
  ThemeProvider: PropTypes.func,
  backgroundColor: PropTypes.string,
};

Nav.defaultProps = {
  showsBorder: false,
  sticky: false,
  isHome: false,
  backgroundColor: "#fff",
};

/**
 * Styles
 */

const Wrapper = styled.div`
  width: 100%;
  padding: 0px 15px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  background-color: ${(props) =>
    props.backgroundColor
      ? props.backgroundColor
      : props.theme.colors.background};
  border-bottom: ${(props) =>
    props.showsBorder ? "solid 1px #e3e3e3" : "none"};

  ${(props) => props.theme.mui.breakpoints.up("md")} {
    height: ${(props) =>
      props.theme.navHeight ? props.theme.navHeight : `${Nav.HEIGHT}px`};
    padding: 25px 40px;
  }
`;

const Logo = styled.img`
  height: 30px;
  pointer-events: none;
  margin: 20px 0px;
  ${(props) => props.theme.mui.breakpoints.up("md")} {
    height: 60px;
    pointer-events: none;
    margin: 20px;
  }
`;

const LogoLink = styled(NavLink)`
  margin: 0px;
  margin-left: 10px;
  position: relative;
  top: 2px;

  ${(props) => props.theme.mui.breakpoints.up("md")} {
    margin-left: 0px;
  }
`;

const RightContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  margin-left: 20px;
  justify-content: flex-end;
  position: relative;
`;

const LoggedInBar = styled.div`
  display: flex;
  align-items: center;
`;

/**
 * Exports
 */

export default Nav;
