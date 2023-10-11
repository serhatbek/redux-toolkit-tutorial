import { useDispatch, useSelector } from 'react-redux';
import CartContainer from './components/CartContainer/CartContainer';
import Navbar from './components/Navbar/Navbar';
import { useEffect } from 'react';
import { calculateTotal } from './features/cart/cartSlice';

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
