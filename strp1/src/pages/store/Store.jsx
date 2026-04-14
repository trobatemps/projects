import React from "react";
import { productsArray } from "../../productStore";

import { Row, Col } from "react-bootstrap";
import ProductCart from "../../components/ProductCart";

const Store = () => {
  return (
    <>
      <h1>Welcome to this experience.</h1>
      <Row xs={1} md={3} className="g-4">
        {productsArray.map((product, idx) => (
          <Col align="center" key={idx}>
            <ProductCart product={product} />
          </Col>
        ))}
      </Row>

    </>
  );
};

export default Store;
