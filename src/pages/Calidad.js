import React from "react";

import styled from "styled-components";

import Nav from "../components/Nav";
import { certificados } from "../data/slidersInfo";

import Button from "@material-ui/core/Button";

function Calidad() {
  return (
    <Root>
      <Nav sticky={true} selected="CALIDAD" />
      <Main>
        <Title>Certificados de Calidad</Title>
        <P>
          Estamos comprometidos con la innovación y las mejoras continuas en el
          desarrollo de todos nuestros productos. Es por eso que incorporamos
          sellos de calidad y seguridad para cumplir con las necesidades y
          requisitos de nuestros clientes.
        </P>
        <CertificadosContainer>
          {certificados.map((item) => (
            <CertificadosItem>
              <ImageContainer>{item.icon}</ImageContainer>
              <TitleItem>{item.title}</TitleItem>
              <P>{item.description}</P>
              <PDFButton variant="contained" href={item.pdf} target="_blank">
                Descargar PDF del producto
              </PDFButton>
            </CertificadosItem>
          ))}
        </CertificadosContainer>
      </Main>
    </Root>
  );
}

const Root = styled.div`
  font-family: ${(props) => props.theme.fonts.primary.regular};
  width: 100%;
`;

const Main = styled.div`
  width: 90%;
  margin: auto;
`;

const Title = styled.h2`
  text-align: center;
`;

const P = styled.p`
  font-weight: 500;

  ${(props) => props.theme.mui.breakpoints.up("md")} {
    margin: 15px 0px;
  }
`;

const CertificadosItem = styled.div`
  border: 1px solid ${(props) => props.theme.colors.secondary};
  border-radius: 10px;
  margin-top: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  ${(props) => props.theme.mui.breakpoints.up("md")} {
    width: 25%;
    margin: 10px;
  }
`;

const TitleItem = styled.h4`
  width: 100%;
  text-align: left;
  margin: 0;
  margin-top: 15px;
`;

const ImageContainer = styled.div``;

const CertificadosContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${(props) => props.theme.mui.breakpoints.up("md")} {
    flex-direction: row;
    flex-grow: 1;
  }
`;

const PDFButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.secondary};
  color: #fff;
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.secondary};
  margin-top: 10px;
  :hover {
    color: ${(props) => props.theme.colors.secondary};
    background-color: white;
  }

  ${(props) => props.theme.mui.breakpoints.up("md")} {
    margin-top: 30px;
  }
`;

export default Calidad;
