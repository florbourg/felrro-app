import React from "react";

import styled from "styled-components";
import Nav from "../components/Nav";

function Contacto() {
  return (
    <Root>
      <Nav sticky={true} selected="CONTACTO" />
      <Title>Ponete en contacto con nosotros</Title>
      <Main>
        <Section>
          <P>
            <strong>Dirección</strong> Ing. Huergo 2239 B1842GGW | Monte Grande
            - Bs As
          </P>
          <P>
            <strong>Lineas Rotativas </strong> +54 11 5263 7564
          </P>
          <P>
            <strong>Mail </strong>{" "}
            <a href="mailto: ventas@felrro.com">ventas@felrro.com</a>
          </P>
        </Section>
        <Section>
          <Iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6553.227879057129!2d-58.478091!3d-34.790493000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7c3d0f4b18d48e20!2sFelrro%20SRL!5e0!3m2!1ses-419!2sar!4v1599255893202!5m2!1ses-419!2sar"
            width="650px"
            height="450px"
            frameborder="0"
            style={{ border: "0", marginTop: "40px" }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
            title="Ubicacion"
          ></Iframe>
        </Section>
      </Main>
    </Root>
  );
}

const Root = styled.div`
  font-family: ${(props) => props.theme.fonts.primary.regular};
  width: 100%;
`;

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${(props) => props.theme.mui.breakpoints.up("md")} {
    flex-direction: row;
  }
`;

const Title = styled.h2`
  text-align: center;
`;

const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${(props) => props.theme.mui.breakpoints.up("md")} {
    width: 50%;
  }
`;

const P = styled.p`
  text-align: center;
  font-weight: 500;
  margin: 3px 0px;
`;

const Iframe = styled.iframe`
  max-width: 300px;
  height: 300px;
  ${(props) => props.theme.mui.breakpoints.up("md")} {
    max-width: 650px;
    height: 400px;
  }
`;

export default Contacto;
