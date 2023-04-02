import React from 'react';

// here we import the (Cart.js) file:which will have the (list) of (cart-items) components:
import Cart from './Cart';

// here we import the (navbar.js) file:through which we will show the (navbar) components on our application:
import Navbar from './Navbar';

function App() {

  return (

    <div className="App">

      {/* here we are putting the (Navbar) component: in our (app.js) file or we can say in our (application) file: */}

      <Navbar/>


      {/* here we are putting the (CART) component: which will have the list of (cart-items) in our (app.js) file or we can say in our (application) file:  */}

      <Cart />



    </div>

  );
  
}

export default App;
