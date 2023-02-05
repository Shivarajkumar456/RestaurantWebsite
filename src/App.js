import React, {useState} from 'react';
import Meals from './Components/Meals/Meals';
import Header from './Components/Layouts/Header';
import Cart from './Components/Cart/Cart';
import CartProvider from './store/cartProvider';

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const clickHandler = ()=>{
    setIsClicked(true);
  }
  const closeHandler = ()=> {
    setIsClicked(false);
  }
  return (
    <CartProvider>
      {isClicked && <Cart onClose={closeHandler}/>}
      <Header onShow={clickHandler}/>
      <main>
      <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
