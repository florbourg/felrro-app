import React from "react";
import styled from "styled-components";

import Nav from "../components/Nav";
import Carousel from "../components/Carousel";

function HomePage() {
  return (
    <Root>
      <Nav sticky={true} selected="HOME" />
      <Carousel />
    </Root>
  );
}

const Root = styled.div`
  font-family: ${(props) => props.theme.fonts.primary.regular};
  width: 100%;
`;

export default HomePage;
