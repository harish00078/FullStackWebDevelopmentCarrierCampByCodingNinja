// here we are creating the Navbar) component:for our application:
import React from "react";

// here In (Navbar) file:we have created the (Navbar) component:for our application:
// we will create that (navbar) component:with the help of the (class):and we extent that (class) with the (react-component) properties:
// because with the help of those (react-component) properties: we will create our (navbar) component:with in the (class):

class Navbar extends React.Component {
  render() {
    return (

      <div>

        {/* here we are creating our (Navbar) component: */}
        <div>

          {/* In navbar we have the image of the (cart):
          
          =>for that first we have to use (image)tag acc to the (jsx): */}
          <img src="https://cdn-icons-png.flaticon.com/512/10265/10265597.png" alt="cart-icon"/>

          {/* navbar also have the count of (cart-items):
          => for creating that count we will use (span) tag: */}
          <span>4</span>



        </div>


      </div>

    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: "#ccc",
  },
};

export default Navbar;
