import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

import styled from "styled-components";

import Nav from "../components/Nav";
import AccordionMenu from "../components/products/AccordionMenu";

import data from "../data/productos.json";

import { getByCode, getById } from "../lib/helpers";

function Productos() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const code = query?.get("code") || null;
  const id = query?.get("id") || null;

  const { productos } = data;
  const [selected, setSelected] = useState();

  const foundProduct = () => {
    if (code) {
      return productos.find(getByCode(code));
    } else {
      return productos.find(getById(id));
    }
  };

  useEffect(() => {
    const selectedProduct = foundProduct();
    setSelected(selectedProduct);
    // eslint-disable-next-line
  }, [id, code]);

  return (
    <Root>
      <Nav sticky={true} selected="PRODUCTOS" />

      <Main>
        <AccordionMenuContainer>
          {/* <Title>Familias</Title>
          <Underline color="rgba(0, 0, 0, 0.12)"></Underline> */}
          <AccordionMenu
            data={data}
            selected={selected}
            setSelected={setSelected}
          />
        </AccordionMenuContainer>
        {selected && (
          <BodyContainer>
            <Title>{selected.producto}</Title>
            <Underline color={selected.color}></Underline>
            <Subtitle>{selected.subtitulo}</Subtitle>

            <ImageContainer>
              <Image src={selected.img} />
            </ImageContainer>

            <PDFButton
              variant="contained"
              href={selected.pdf_url}
              target="_blank"
              bkcolor={selected.color}
            >
              Descargar PDF del producto
            </PDFButton>

            <SectionTitle color={selected.color}>Aplicaciones</SectionTitle>
            <Text>{selected.detalle}</Text>

            <HighlightContainer>
              {selected.destacados?.map((item) => (
                <HighlightCard color={selected.color}>
                  <HighlightCardContent>
                    <h6>{item.titulo}</h6>
                    <p dangerouslySetInnerHTML={{ __html: item.detalle }}></p>
                  </HighlightCardContent>
                </HighlightCard>
              ))}
            </HighlightContainer>

            {selected.cuadros && (
              <React.Fragment>
                <SectionTitle color={selected.color}>Construcción</SectionTitle>
                <DetailsContainer>
                  {selected.cuadros?.map((item) => (
                    <DetailsCard>
                      <DetailsCardContent>
                        <h6>{item.titulo}</h6>
                        <p
                          dangerouslySetInnerHTML={{ __html: item.detalle }}
                        ></p>
                      </DetailsCardContent>
                    </DetailsCard>
                  ))}
                </DetailsContainer>
              </React.Fragment>
            )}

            {selected.subproducto && (
              <SubproductContainer>
                {selected.subproducto?.map((item) => (
                  <SubproductCard color={selected.color}>
                    <SubproductCardContent style={{ "max-width": "40%" }}>
                      <SubproductImage src={item.img} />
                    </SubproductCardContent>

                    <SubproductCardContent>
                      <h5>{item.nombre}</h5>
                      <ul>
                        {item.details.map((element) => (
                          <li>{element.detail}</li>
                        ))}
                      </ul>
                    </SubproductCardContent>
                  </SubproductCard>
                ))}
              </SubproductContainer>
            )}

            <SectionTitle color={selected.color}>
              Información Adicional
            </SectionTitle>

            {selected.tablas?.map((item) => (
              <TablesContainer>
                <TableTitle color={selected.color}>{item.titulo}</TableTitle>
                <Tabla
                  dangerouslySetInnerHTML={{ __html: item.tabla1 }}
                ></Tabla>
                <Tabla
                  dangerouslySetInnerHTML={{ __html: item.tabla2 }}
                ></Tabla>
              </TablesContainer>
            ))}
          </BodyContainer>
        )}
      </Main>
    </Root>
  );
}

const Root = styled.div`
  font-family: ${(props) => props.theme.fonts.primary.regular};
  width: 100%;
`;

const Main = styled.div`
  display: flex;
`;

const AccordionMenuContainer = styled.div`
  display: none;
  ${(props) => props.theme.mui.breakpoints.up("md")} {
    display: block;
    width: 20%;
    padding: 70px 20px 0px;
  }
`;

const BodyContainer = styled.div`
  width: 100%;
  padding: 10px;

  ${(props) => props.theme.mui.breakpoints.up("md")} {
    padding: 20px 50px;
    width: 70%;
  }
`;

const Title = styled.h2`
  margin: 5px 0;
`;

const Subtitle = styled.h4`
  margin: 10px 0;
  font-weight: 400;
`;

const Underline = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${(props) => (props.color ? props.color : "red")};
`;

const ImageContainer = styled.div`
  text-align: right;
`;

const Image = styled.img`
  max-width: 100%;
  margin: 20px 0px;
`;

const PDFButton = styled(Button)`
  background-color: ${(props) => (props.bkcolor ? props.bkcolor : "#67a4c7")};
  color: #fff;
`;

const SectionTitle = styled.h5`
  font-weight: 500;
  font-size: 20px;
  color: ${(props) => (props.color ? props.color : "grey")};
`;

const Text = styled.p`
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
`;

const HighlightContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HighlightCard = styled(Card)`
  border: #67a4c7 2px solid;
  border-color: ${(props) => (props.color ? props.color : "#67a4c7")};
  text-align: center;
  flex-grow: 1;
  margin: 0px 5px;

  :first-child {
    margin-left: 0px;
  }

  :last-child {
    margin-right: 0px;
  }
`;

const HighlightCardContent = styled(CardContent)`
  padding: 0px 16px 0px 16px;

  :last-child {
    padding-bottom: 0px;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 20px 0px;
`;

const DetailsCard = styled(Card)`
  border: none;
  text-align: left;
  width: 49%;
  box-sizing: border-box;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.3) !important;
  margin: 5px 0px;

  :nth-child(odd) {
    margin-right: 10px;
  }
`;

const DetailsCardContent = styled(CardContent)`
  padding: 0px 16px 0px 16px;

  :last-child {
    padding-bottom: 0px;
  }
`;

const SubproductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 20px 0px;
`;

const SubproductCard = styled(Card)`
  display: flex;
  border: #67a4c7 1px solid;
  border-color: ${(props) => (props.color ? props.color : "#67a4c7")};
  text-align: left;
  width: 100%;
  box-sizing: border-box;
  //box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.3) !important;
  margin: 20px 0px;
`;

const SubproductImage = styled.img`
  width: 100%;
  margin: auto;
`;

const SubproductCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  padding: 0px 16px;
`;

const TablesContainer = styled.div``;
const Tabla = styled.div`
  margin: 15px 0px;
`;

const TableTitle = styled.h5`
  border: #67a4c7 2px solid;
  border-color: ${(props) => (props.color ? props.color : "#67a4c7")};
  border-radius: 8px;
  height: 48px;
  line-height: 48px;
  padding: 0px 20px;
`;

export default Productos;
