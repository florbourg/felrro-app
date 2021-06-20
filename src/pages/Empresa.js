import React from "react";

import styled from "styled-components";
import Nav from "../components/Nav";

function Empresa() {
  return (
    <Root>
      <Nav sticky={true} selected="EMPRESA" />
      <Main>
        <Title>Nuestra empresa</Title>
        <P>
          Desde hace más de 30 años fabricamos y desarrollamos Conductores
          Eléctricos Especiales bajo planos, normas y requerimientos de los
          usuarios, manteniendo stock permanente de los productos estándar.Desde
          nuestro inicio, hemos sido un ejemplo de dedicación y pujanza para
          responder a las necesidades de todos nuestros clientes, incorporando
          constantemente nuevos artículos afines a nuestra especialidad.
        </P>
        <P>
          Una constante tarea de perfeccionamiento, maquinarias de alta
          tecnología, una organización rediseñada para el cumplimiento de
          normas, una ingeniería del producto y diseño orientado al mercado, una
          producción a cargo de ingenieros y técnicos especialistas que
          controlan el proceso de fabricación, han convertido a FELRRO S.R.L. en
          una empresa pionera en el país.
        </P>
        <P>
          A continuación se detalla una breve lista de los materiales que se
          encuentran dentro de nuestro portfolio de fabricación. Los mismos son
          fabricados bajo normas, cumpliendo con los más altos estándares de
          calidad. A su vez nos dedicamos a satisfacer las necesidades de
          nuestros clientes, fabricando cables de características especiales
          indicadas por ellos. Consideramos oportuno indicar, que hemos sido
          certificados con el sello UL Listed en nuestra línea de cables de
          instrumentación, para las familias FR y FH.
        </P>
        <P>
          Esta certificación, conjuntamente con la del sistema ISO 9001, nos
          permite abastecer no solo al mercado argentino, sino también al
          exterior con un aval internacional de calidad.
        </P>

        <ul>
          <li>Cables para instrumentación electrónica</li>
          <li>Cables de datos, informática y electrónica</li>
          <li>Cables para instrumentación de termocuplas</li>
          <li>Cables de Potencia y Energía</li>
          <li>Cables de Comando y Control</li>
          <li>Cables para bombas sumergibles</li>
          <li>Cables para protección catódica</li>
          <li>Cables flexibles para sistemas móviles</li>
          <li>Cables para soldadura</li>
          <li>Cables especiales</li>
        </ul>

        <P>
          <strong>Nuestra Misión: </strong> Proveer a nivel nacional e
          internacional cables especiales con la más alta tecnología y
          estándares de calidad, con el fin de superar las expectativas de los
          clientes y ampliar las fronteras de nuevos negocios. Entendiendo como
          herramienta fundamental el capital humano desarrollado en un entorno
          participativo e integrador. Formar parte de Comités u Organismos
          Nacionales e Internacionales, para crecer culturalmente y estar al
          tanto de lo que sucede tanto nacional como internacionalmente en
          innovación.
        </P>
        <P>
          <strong>Nuestra Visión: </strong>Convertirnos en la principal empresa
          fabricante de cables especiales, orientados a la innovación permanente
          y sostenida; generando desarrollo tecnológico, amplitud de servicios y
          capital humano.
        </P>
        <P>
          <strong>Nuestros Valores: </strong>

          <ul>
            <li>Calidad</li>
            <li>Seriedad</li>
            <li>Seguridad</li>
            <li>Trabajo en equipo</li>
            <li>Tecnología</li>
            <li>Honestidad e integridad empresaria</li>
            <li>Mejora continua</li>
          </ul>
        </P>
      </Main>
    </Root>
  );
}

const Root = styled.div`
  font-family: ${(props) => props.theme.fonts.primary.regular};
  width: 100%;
`;

const Main = styled.div`
  width: 80%;
  margin: 0px auto;
`;

const Title = styled.h2`
  text-align: center;
`;

const P = styled.p`
  font-weight: 500;
  padding: 0px 10px;

  ${(props) => props.theme.mui.breakpoints.up("md")} {
    margin: 15px 0px;
  }
`;

export default Empresa;
