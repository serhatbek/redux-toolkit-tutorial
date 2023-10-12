import { useDispatch, useSelector } from 'react-redux';
import CartContainer from './components/CartContainer/CartContainer';
import Navbar from './components/Navbar/Navbar';
import { useEffect } from 'react';
import { calculateTotal, getCartItems } from './features/cart/cartSlice';
import Modal from './components/Modal/Modal';

function App() {
  const dispatch = useDispatch();
  const { cartItems, isLoading } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
