// here we are creating the Navbar) component:for our application:
import React from "react";

// here In (Navbar) file:we have created the (Navbar) component:for our application:
// we will create the (navbar) component:with the help of the (function):
// basically we create the (navbar) component with the help of the (function) component:
// IMP => because this component does not have a (state) object in it:so there is no need to create the (navbar) component with the help of the (class) component:

// for creating (function) components:we are using the (arrow) function method:

// IMP = In function components: we also have to  pass the (props) as  default arugment to the hole function (component):so that we can access the (props) or its properties in our (function) component:
const Navbar = (props) => {

  // IMP => when we create the (component):with the help of the (function) component:then we did not have to use the (render) function:
  // IMP => because (function) components are the plain (javascript) functions:

  // render() {

    return (
      //    here we are giving the style to the (navbar) icon:with the (styles) object that we have created:
      //   => we can do that with the help of the (javascript): because (styles) object is a (javascript) object: for using javascript under the (jsx)
      //   :we have use the currly brackets for using the (javascript):

      //   => IMP = we also have to use the (style) tag or property we can say :to define that we are giving the (style) to this element:

      <div style={styles.nav}>
        {/* here we are creating our (Navbar) component: */}

        <div style={styles.cartIconContainer}>
          {/* In navbar we have the image of the (cart):
          
          =>for that first we have to use (image)tag acc to the (jsx): */}

          {/* here we are giving the style to the (navbar) icon:with the (styles) object that we have created:
          => we can do that with the help of the (javascript): because (styles) object is a (javascript) object: for using javascript under the (jsx)
          :we have use the currly brackets for using the (javascript):
          
          => IMP = we also have to use the (style) tag or property we can say :to define that we are giving the (style) to this element:*/}

          <img
            style={styles.cartIcon}
            src="https://cdn-icons-png.flaticon.com/512/10265/10265597.png"
            alt="cart-icon"
          />

          {/* navbar also have the count of (cart-items):
          => for creating that count we will use (span) tag: */}

          {/* here we are using the (count) function:that we have created in the (App) component:for counting the products (quantity):
          => and we gave the (function) as (props) to the (navbar) component:so that we can use that (function):
          => In the (navbar) component's (count) element:which will show that count on the (web-page): */}
          <span style={styles.cartCount}>{props.count}</span>
        </div>
      </div>
    );

  // }

}

// here we are creating the (styles) to our (Navbar) component:
// for that we will create the (styles) objects:
// under that object we will create the different properties acc to the (styles):that we want to gave the particular element of the (navbar) component:
// we create particular property for the particular (element):under the (styles) object:

const styles = {
  // here we create the (styles) property for the (navbar) icon:
  cartIcon: {
    height: 32,
    marginRight: 20,
  },
  // here we create the (styles) property for the (navbar):
  nav: {
    height: 70,
    background: "#4267b2",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  // here we create the (styles) property for the (navbar) icon container:
  cartIconContainer: {
    position: "relative",
  },
  // here we create the (styles) property for the (navbar) cart count:
  cartCount: {
    background: "yellow",
    borderRadius: "50%",
    padding: "4px 8px",
    position: "absolute",
    right: 0,
    top: -9,
  },
};

export default Navbar;
