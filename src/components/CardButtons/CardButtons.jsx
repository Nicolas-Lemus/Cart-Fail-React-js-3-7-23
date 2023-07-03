import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";

const CartButtons = ({ customStyle, productId }) => {
  const [state, setState] = useState(1);
  const { count, setCount } = useContext(CartContext);

  const handleMoreClick = () => {
    setState(state + 1);
  };

  const handleLessClick = () => {
    setState(state - 1);
  };

  const addToCart = () => {
    const existingProductIndex = count.Tecnologia.findIndex(
      (p) => p.productId === productId
    );

    if (existingProductIndex !== -1) {
      const updatedProducts = [...count.Tecnologia];
      updatedProducts[existingProductIndex].qty += state;

      setCount((prevState) => ({
        ...prevState,
        qtyItems: prevState.qtyItems + state,
        Tecnologia: updatedProducts,
      }));
    } else {
      const newProduct = {
        productId,
        qty: state,
      };

      setCount((prevState) => ({
        ...prevState,
        qtyItems: prevState.qtyItems + state,
        Tecnologia: [...prevState.Tecnologia, newProduct],
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
      <Button className="ml-2" variant={customStyle} onClick={addToCart}>
        Agregar al Carrito
      </Button>
    </div>
  );
};

export default CartButtons;
