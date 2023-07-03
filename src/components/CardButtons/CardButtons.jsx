/* import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { CardContext } from "../../context/CartContext";
import "./CardButtons.css"

const CartButtons = () => {
  //DEBEMOS PASARLO COMO UN ARRAY
  const [count, setCount] = useContext(CardContext);
  const [state, setState] = useState(0);

  const handleClick = () => {
    setCount(count + 1)
    setState(state + 1);
  };
  
  const handleClickRes = () => {
    if (count > 0) {
      setCount(count - 1);
    }
    if (state > 0) {
      setState(state - 1);
    }
  };

  return (
    <div className="d-flex align-items-center">
      <div className="w-25">
        <Button
          variant="outline-secondary"
          className="rounded-0"
          onClick={handleClickRes}
        > 
        -
        </Button>
        <span className="spamPrecio">{state}</span>
        <Button
          variant="outline-secondary"
          className="rounded-0"
          onClick={handleClick}
        >
        +
        </Button>
      </div>
      <Button className="ml-2" variant="primary">
        Agregar al Carrito
      </Button>
    </div>
  );
};

export default CartButtons;
 */

import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";

const CartButtons = ({ customStyle, productId}) => {
  const [state, setState] = useState(1);
  const { count, setCount } = useContext(CartContext);

  const handleMoreClick = () => {
    setState(state + 1);
  };

  const handleLessClick = () => {
    setState(state - 1);
  };

  const addToCart = () => { 


    const existingProduct = count.products.find(
      (p) => p.productId === productId
    );
    if (existingProduct) {
      existingProduct.qty += state;
    } else {
      const newProduct = {
        productId,
        qty: state,
      };
      setCount((prevState) => ({
        
        qtyItems: prevState.qtyItems + state,
        products: [...prevState.products, newProduct],
      }));
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ margin: "10px" }}>
        <Button
          variant="outline-secondary"
          className="rounded-0"
          onClick={handleLessClick}
        >
          -
        </Button>
        <span style={{ margin: "10px", fontSize: "18px" }}>{state}</span>
        <Button
          variant="outline-secondary"
          className="rounded-0"
          onClick={handleMoreClick}
        >
          +
        </Button>
      </div>
      <Button
        className="ml-2"
        variant={customStyle}
        onClick={addToCart}
      >
        Agregar al Carrito
      </Button>
    </div>
  );
};

export default CartButtons;
