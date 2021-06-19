import React from "react";
import styled from "styled-components";

import logo from "../images/Logo-Felrro-curvas-bco.png";

import NavLinkList, { NavLink } from "./NavLinkList";

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
  position: fixed;
  bottom: 0px;
  width: 100%;
  //height: ${(props) => props.theme.footerHeight};
  background-color: ${(props) => props.theme.colors.primary};
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  height: 60px;
  pointer-events: none;
  margin: 20px;
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

const CentralContent = styled.div`
  margin-left: 40px;
`;
const P = styled.p`
  color: white;
  font-weight: 500;
  letter-spacing: 1.1px;
`;
