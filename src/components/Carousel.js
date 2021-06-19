import React from "react";
import styled from "styled-components";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Pagination from "./Pagination";
import Button from "@material-ui/core/Button";
import { slidersInfo } from "../data/slidersInfo";

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
          {slidersInfo.map((item) => (
            <Slide>
              <ImageContainer>
                <Img src={item.img} alt="" />
              </ImageContainer>
              <InfoContainer>
                <Title color={item.color}>{item.title}</Title>
                <Description>{item.description}</Description>
                <PDFButton color={item.color} href={item.pdf} target="_blank">
                  Catálogo PDF
                </PDFButton>
              </InfoContainer>
            </Slide>
          ))}
        </AutoPlaySwipeableViews>
        <Pagination
          dots={9}
          index={index}
          onChangeIndex={this.handleChangeIndex}
        />
      </Root>
    );
  }
}

const Root = styled.div`
  text-align: center;
`;

const Slide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  ${(props) => props.theme.mui.breakpoints.up("md")} {
    flex-direction: row-reverse;
    align-items: space-between;
    justify-content: center;
    min-height: 500px;
  }

  ${(props) => props.theme.mui.breakpoints.up("xl")} {
    min-height: 600px;
  }
`;

const ImageContainer = styled.div`
  width: 80%;

  ${(props) => props.theme.mui.breakpoints.up("md")} {
    width: auto;
    text-align: right;
  }
`;

const Img = styled.img`
  width: 100%;

  ${(props) => props.theme.mui.breakpoints.up("md")} {
    width: auto;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: center;
  justify-content: flex-start;
  height: 75%;
  padding: 20px 0px;
  box-sizing: border-box;

  ${(props) => props.theme.mui.breakpoints.up("md")} {
    width: 40%;
    align-items: flex-start;
    justify-content: center;
    padding: 20px;
  }
`;

const Title = styled.h2`
  margin: 0;
  color: ${(props) => (props.color ? props.color : "#222")};
`;

const Description = styled.p`
  text-align: center;
  ${(props) => props.theme.mui.breakpoints.up("md")} {
    text-align: left;
  }
`;

const PDFButton = styled(Button)`
  background-color: ${(props) => (props.color ? props.color : "#222")};
  border: 1px solid ${(props) => props.color};
  color: white;
  width: 170px;
  margin-top: 10px;
  :hover {
    color: ${(props) => props.color};
  }

  ${(props) => props.theme.mui.breakpoints.up("md")} {
    margin-top: 30px;
  }
`;

export default DemoAutoPlay;
