import React from "react";

import styled from "styled-components";
import Nav from "../components/Nav";

function Contacto() {
  return (
    <Root>
      <Nav sticky={true} selected="CONTACTO" />
    </Root>
  );
}

const Root = styled.div`
  font-family: ${(props) => props.theme.fonts.primary.regular};
  width: 100%;
`;

export default Contacto;
