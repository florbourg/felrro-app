import styled from "styled-components";
import "./css/main.css";
import data from "./data/productos.json";

function App({ code }) {
  const { productos } = data;

  const items = productos.map(function (element) {
    return {
      nombre: element.producto,
      id: element.id,
      tablas: element.tablas,
      destacados: element.destacados,
    };
  });

  function getByCode(item) {
    const isFound1 = item.tablas[0].tabla1.indexOf(code);
    const isFound2 = item.tablas[0].tabla2.indexOf(code);
    return isFound1 !== -1 || isFound2 !== -1;
  }

  const foundProduct = () => {
    return items.find(getByCode);
  };

  const products = foundProduct();
  console.log(products);

  return (
    <Container>
      <h3>{products.nombre}</h3>
      {products.tablas.map((item) => (
        <>
          {/* <p>{item.titulo}</p> */}
          <Tabla dangerouslySetInnerHTML={{ __html: item.tabla1 }}></Tabla>
          <Tabla dangerouslySetInnerHTML={{ __html: item.tabla2 }}></Tabla>
        </>
      ))}
    </Container>
  );
}

const Container = styled.div``;
const Tabla = styled.div`
  margin: 15px 0px;
`;

export default App;
