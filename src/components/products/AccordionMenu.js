import React, { useState } from "react";
import styled from "styled-components";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";

import { Link } from "react-router-dom";

import { getByFamily } from "../../lib/helpers";

export default function CustomizedAccordions({ data }) {
  const { productos, familias } = data;

  const [expanded, setExpanded] = useState();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  //console.log(selected);
  return (
    <div>
      {familias.map((item) => (
        <Accordion
          square
          expanded={expanded === item.nombre}
          onChange={handleChange(item.nombre)}
          color={item.color}
        >
          <AccordionSummary
            color={item.color}
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <TabTitle>{item.nombre}</TabTitle>
          </AccordionSummary>
          <AccordionDetails>
            <LinksContainer>
              {getByFamily(productos, item.nombre).map((item) => (
                <Item to={"/productos?id=" + item.id}>
                  <h5>{item.producto}</h5>
                  <p>
                    {item.aislacion} / {item.vaina}
                  </p>
                </Item>
              ))}
            </LinksContainer>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Accordion = styled(MuiAccordion)`
  :before {
    opacity: 0 !important;
  }
`;

const AccordionSummary = styled(MuiAccordionSummary)`
  margin: 5px 0px;
  //border-right: 3px solid ${(props) => props.color};
  border-left: 3px solid ${(props) => props.color};
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  height: 55px;
`;

const AccordionDetails = styled(MuiAccordionDetails)`
  padding: 0px 0px 0px 40px;
`;

const TabTitle = styled(Typography)`
  font-size: 15px;
  font-weight: 500;
`;

const Item = styled(Link)`
  margin: 10px 0px;
  text-decoration: none;
  color: ${(props) => props.theme.colors.text};
`;
