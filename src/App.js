import React from 'react';
import Meals from './Components/Meals/Meals';
import Header from './Components/Layouts/Header';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <React.Fragment>
      <Cart />
      <Header />
      <main>
      <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
