import React from "react";
import styled from "styled-components";

import logo from "../images/Logo-Felrro-curvas-bco.png";

import { NavLink } from "./NavLinkList";

export default function Footer() {
  return (
    <Main>
      <LogoLink href="https://felrro.com.ar/">
        <Logo src={logo} alt="logo" />
      </LogoLink>
      <CentralContent>
        <P>
          <strong>Dirección:</strong> Ing. Huergo 2239 B1842GGW | Monte Grande -
          Bs As
        </P>
        <P>
          <strong>Lineas Rotativas:</strong> +54 11 5263 7564
        </P>
      </CentralContent>
    </Main>
  );
}

const Main = styled.div`
  display: none;

  ${(props) => props.theme.mui.breakpoints.up("md")} {
    display: block;
    width: 100%;
    background-color: ${(props) => props.theme.colors.primary};
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Logo = styled.img`
  height: 60px;
  pointer-events: none;
  margin: 20px;
`;

const LogoLink = styled(NavLink)`
  display: none;
  margin: 0px;
  margin-left: 10px;
  position: relative;
  top: 2px;

  ${(props) => props.theme.mui.breakpoints.up("md")} {
    display: block;
    margin-left: 0px;
  }
`;

const CentralContent = styled.div`
  text-align: center;
  padding: 5px 0px;
  ${(props) => props.theme.mui.breakpoints.up("md")} {
    display: block;
    margin-left: 40px;
    padding: 0px;
  }
`;
const P = styled.p`
  color: white;
  font-weight: 500;
  letter-spacing: 1.1px;
  font-size: 10px;
  padding: 0px 10px;
  margin: 0;

  ${(props) => props.theme.mui.breakpoints.up("md")} {
    margin: 15px 0px;
    font-size: 14px;
  }
`;
