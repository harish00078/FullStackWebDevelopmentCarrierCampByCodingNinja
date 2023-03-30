import React from 'react';

// here we import the (Cart.js) file:which will  have the (list) of (cart-items):
import Cart from './Cart';

function App() {

  return (

    <div className="App">

      {/* here we are rendering the (CART) in the browser:which will have the list of (cart-items) */}

      <Cart />

    </div>

  );
  
}

export default App;
