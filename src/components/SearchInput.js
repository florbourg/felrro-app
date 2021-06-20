import React, { useState } from "react";
import styled from "styled-components";

import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";

import SearchIcon from "@material-ui/icons/Search";

import { useHistory } from "react-router-dom";

export default function CustomizedInputBase({ setDrawer }) {
  const [code, setCode] = useState();
  const history = useHistory();

  const handleInputValue = (e) => {
    setCode(e.currentTarget.value);
  };

  const handleInputSearch = () => {
    history.push("/productos?code=" + code);
    setDrawer();
  };
  return (
    <Container>
      <InputWrapper
        placeholder="Busqueda por código de producto"
        onChange={handleInputValue}
      />
      <DividerWrapper orientation="vertical" />
      <IconButtonWrapper aria-label="search" onClick={handleInputSearch}>
        <SearchIcon />
      </IconButtonWrapper>
    </Container>
  );
}

const InputWrapper = styled(InputBase)`
  margin-left: 20px;
  flex: 1;
`;

const Container = styled(Paper)`
  padding: 2px 4px;
  display: flex;
  align-items: center;
  width: 90%;
  border: 1px solid lightgrey;
  margin: 0px 30px;

  ${(props) => props.theme.mui.breakpoints.up("md")} {
    width: 400px;
  }
`;

const DividerWrapper = styled(Divider)`
  height: 28px;
  margin: 4px;
`;

const IconButtonWrapper = styled(IconButton)`
  padding: 10px;
`;
