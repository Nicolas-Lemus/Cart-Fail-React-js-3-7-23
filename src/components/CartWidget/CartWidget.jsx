/* import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css';
import { CardContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
//pasamos el estado del useContext
    const [count] = useContext(CardContext);
 */


import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {

  const [qty, setQty] = useState(0);
//estabaq comnoa array antesa [];
  const {count } = useContext(CartContext);

  useEffect(() => {

    console.log(count);
    //setear la base de datos Teacnologia en ves de products
    setQty(count.Tecnologia.reduce((total, product) => total + product.qty, 0));
  },[count]);

    return (
        <div className='cart'>
            <Link to="/carts">
                <FontAwesomeIcon className='icon' icon={faCartShopping}/>
            </Link>
            <span>
                {qty}
                {/* {count} */}
            </span>
        </div>
    )
}
export default CartWidget