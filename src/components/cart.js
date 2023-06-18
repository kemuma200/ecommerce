import { useEffect, useState } from "react";
import { Button, Col, Form, Image, Row } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import { AiFillDelete } from "react-icons/ai";
import { GlobalContextState } from "../context/context";
import Rating from "./rating";
import Navbar from "./navbar";
import "../css/cart.css"

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = GlobalContextState();
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <div className="cart" >
    <Navbar/>
      <div className="cartProductContainer">
        <h1>My Cart</h1>
        <ListGroup horizontal >
        <ListGroup.Item className="cartItem cartT">
          <Row className="cartT">
          <Col md={2} className="cartItemSection">
          <h5>Product Image</h5></Col>
          <Col md={2} className="cartItemSection">
          <h5>Product</h5></Col>
          <Col md={2} className="cartItemSection">
          <h5>Price</h5></Col>
          <Col md={2} className="cartItemSection">
          <h5>Rating</h5></Col>
          <Col md={2} className="cartItemSection">
          <h5>Unit</h5></Col>
          </Row>
          </ListGroup.Item>
          {cart.map((prod) => (
            <ListGroup.Item className="cartItem cartT" key={prod.id}>
              <Row className="cartT">
                <Col md={2} className="cartItemSection">
                  <Image className="cartItemImage" src={prod.image} alt={prod.name} fluid rounded />
                </Col>
                <Col md={2} className="cartItemSection">
                  <span>{prod.name}</span>
                </Col>
                <Col md={2} className="cartItemSection">₹ {prod.price}</Col>
                <Col md={2} className="cartItemSection">
                  <Rating rating={prod.ratings} />
                </Col>
                <Col md={2} className="cartItemSection">
                  <Form.Control
                    as="select"
                    value={prod.qty}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          id: prod.id,
                          qty: e.target.value,
                        },
                      })
                    }
                  >
                    {[...Array(prod.inStock).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </Form.Control>
                </Col>
                <Col md={2} className="cartItemSection">
                  <Button
                    type="button"
                    variant="light"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                      })
                    }
                  >
                    <AiFillDelete fontSize="20px" />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="cartFilter">
        <p> Subtotal ({cart.length}) items </p>
        <p> Total: ₹ {total} </p>
        <Button type="button" disabled={cart.length === 0}>
        Proceed to Checkout
        </Button>
        
      </div>
    </div>
  );
};

export default Cart;