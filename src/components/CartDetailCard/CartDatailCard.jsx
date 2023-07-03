/* import React from "react";


const CartDetailCard = ({ product, qty }) => {
  return (
    <div >
        <div >
          <div>
            <img alt={product.title} />
          </div>
          <div>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            Precio: ${product.price}
            <p>Cantidad:{qty.qty}</p>
          </div>
        </div>
    </div>
  );
};

export default CartDetailCard; */

import React from "react";

const CartDetailCard = ({  product ,qty}) => {
  return (
    <div>
      <div>
        <div>
          <img alt={product.title} src={product.images} />
        </div>
        <div>
          <h2>{product.title}</h2>
          Precio: ${product.price}
          <p>Cantidad: 
            {qty}</p>
        </div>
      </div>
    </div>
  );
};

export default CartDetailCard;
