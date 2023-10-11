import { useSelector } from 'react-redux';
import { CartIcon } from '../../icons';

const Navbar = () => {
  // const { amount } = useSelector((state) => state.cart); // same as below
  const { cartAmount } = useSelector((store) => store.cart);

  return (
    <nav>
      <div className='nav-center'>
        <h3>Redux Toolkit</h3>
        <div className='nav-container'>
          <CartIcon />
          <div className='amount-container'>
            <p className='total-amount'>{cartAmount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
