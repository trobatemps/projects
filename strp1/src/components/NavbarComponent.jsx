import React, { useState, useContext } from "react";
import { Button, Container, Navbar, Modal } from "react-bootstrap";
import { CartContext } from "../CartContext";
import { getProductData } from "../productStore";
import CartProduct from "./CartProduct"

const NavbarComponent = () => {
  const cart = useContext(CartContext); //DON'T forget to define "cart".

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Fetching

  const checkout = async () => {
    await fetch('http://localhost:4000/checkout', {
      method: "POST",
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({items:cart.items})
    }).then((response) => {
      return response.json();
    }).then((response)=>{if(response.url){window.location.assign(response.url)}})
  }

  //52

  //Total Quantity
  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0,
  );

  //Total Price
  const productsTotalPrice = cart.items.reduce((total, cartItem) => {
    const productData = getProductData(cartItem.id);
    return total + productData.price * cartItem.quantity;
  }, 0);
  // const productsTotalPrice = cart.items.reduce((product) => getTotalCost(product.price),0)
  return (
    <>
      <Navbar expand="sm">
        <Navbar.Brand href="/">Tu Tienda</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={handleShow}>Cart ({productsCount} Items)</Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productsCount > 0 ? (
            <>
              <p>Items in your cart:</p>
              {cart.items.map((currentProduct, idx) => (
                <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity} />
              ))}
              <h1>Total Amount: {productsTotalPrice} </h1>

              <Button variant="success" onClick={checkout}>Purchase Items</Button>
            </>
          ) : (
            <h1>There are no items in your cart!</h1>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NavbarComponent;
