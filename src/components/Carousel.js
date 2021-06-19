import React from "react";
import styled from "styled-components";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Pagination from "./Pagination";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

class DemoAutoPlay extends React.Component {
  state = {
    index: 0,
  };

  handleChangeIndex = (index) => {
    this.setState({
      index,
    });
  };

  render() {
    const { index } = this.state;

    return (
      <Root>
        <AutoPlaySwipeableViews
          index={index}
          onChangeIndex={this.handleChangeIndex}
        >
          <Slide
            desktop="./images/home/B_01_Instrumentacion.jpg"
            mobile="./images/home/B_01_Instrumentacion-M.jpg"
          >
            <button>Click</button>
          </Slide>
        </AutoPlaySwipeableViews>
        <Pagination
          dots={3}
          index={index}
          onChangeIndex={this.handleChangeIndex}
        />
      </Root>
    );
  }
}

const Slide = styled.div`
  display: flex;
  flex-direction: row;
  background-image: url(${(props) => props.mobile});
  background-position: right center;
  background-repeat: no-repeat;
  height: 80vh;

  ${(props) => props.theme.mui.breakpoints.up("md")} {
    background-image: url(${(props) => props.desktop});
    background-position: center center;
  }
`;

const Root = styled.div`
  position: relative;
  width: 100%;
`;

export default DemoAutoPlay;
