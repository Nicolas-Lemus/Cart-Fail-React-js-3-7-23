import React, { useContext } from "react";
import { collection, getDoc, doc, getFirestore } from "firebase/firestore";
import { CartContext } from "../../context/CartContext";
import CartDetailCard from "../CartDetailCard/CartDatailCard";
import DotSpinner from "../../Animations/DotSpinner ";

const fetchProductsByIds = async (ids) => {
  const db = getFirestore();
  const productRefs = ids.map((Id) => doc(collection(db, "Tecnologia"), Id));

  const productSnapshots = await Promise.all(
    productRefs.map((productRef) => getDoc(productRef))
  );

  const products = productSnapshots.map((productSnapshot) => {
    if (productSnapshot.exists()) {
      return { id: productSnapshot.id, ...productSnapshot.data() };
    } else {
      return null;
    }
  });
  return products.filter((product) => product !== null);
};

const Cart = () => {
  const [error, setError] = React.useState(false);
  const [productsData, setProductsData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const { count } = useContext(CartContext);

  React.useEffect(() => {
    const ids = count.Tecnologia.map((product) => product.productId);

    fetchProductsByIds(ids)
      .then((res) => {
        setProductsData(res);
      })
      .catch((err) => setError(err))
      .then(() => setLoading(false));
  }, [count]);

  return loading ? (
    <DotSpinner />
  ) : error ? (
    <div>Error</div>
  ) : (
    <div>
      {productsData.map((product) =>{
        return(
          <CartDetailCard 
            key={product.Id}
            product={product}
            qty={count.Tecnologia.find((item) => item.productId === product.Id)?.qty || 0}/>
          )
        } 
      )}
    </div>
  );
};

export default Cart;
