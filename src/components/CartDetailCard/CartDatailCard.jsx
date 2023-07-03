import { Link } from 'react-router-dom';
import '../Card/Card.css';

const CartDetailCard = ({product}) => {
  
  return (
    <div className="divPadre">
      <div className='Cards'>
        <div className='Card'>
            <div className='Title'>{product.title}</div>
            <div className='Images'>
              <Link to={`/products/${product.id}`}><img src={product.images} alt="productos-disponibles"/></Link>
            </div>
            <div className='Previous'>{product.previous_price}</div>
            <div className='Price'>${product.price}</div>
            <div className='Stock'>{product.stock}</div>
        </div>
        </div>
    </div>
  );
}

export default CartDetailCard