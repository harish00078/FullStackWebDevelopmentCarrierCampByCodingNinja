import React from 'react';

// here we are importing the (cart-iteam) component:that we have created: In the main (app-file):

import CartItem from './CartItem';

function App() {
  return (
    <div className="App">

      {/* here we are adding the (cart-iteam) component:that we have created: In the main (app-file): */}
      {/* we have to add it in the way of (jsx):so for definig it in the main (app-file): we have to use the (reverse slash = / ): */}
      <CartItem />

    </div>
  );
}

export default App;
