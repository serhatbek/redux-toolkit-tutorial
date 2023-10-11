import { useDispatch } from 'react-redux';
import { ChevronDown, ChevronUp } from '../../icons';
import {
  removeCartItem,
  increaseCart,
  decreaseCart,
} from '../../features/cart/cartSlice';

const CartItem = ({ id, title, price, img, amount }) => {
  const dispatch = useDispatch();

  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        <button
          className='remove-btn'
          onClick={() => dispatch(removeCartItem(id))}
        >
          remove
        </button>
      </div>

      <div>
        <button
          className='amount-btn'
          onClick={() => dispatch(increaseCart({ id }))}
        >
          <ChevronUp />
        </button>
        <p className='amount'>{amount}</p>
        <button
          className='amount-btn'
          onClick={() => {
            if (amount === 1) {
              dispatch(removeCartItem(id));
              return;
            }
            dispatch(decreaseCart(id));
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
