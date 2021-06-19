import React from "react";

import styled from "styled-components";
import Nav from "../components/Nav";

function NotFound() {
  return (
    <Root>
      <Nav sticky={true} selected="NotFound" />
      <p>Not Found</p>
    </Root>
  );
}

const Root = styled.div`
  font-family: ${(props) => props.theme.fonts.primary.regular};
  width: 100%;
`;

export default NotFound;
