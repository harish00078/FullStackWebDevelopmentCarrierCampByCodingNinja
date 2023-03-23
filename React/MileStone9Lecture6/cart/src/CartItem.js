import React from "react";

class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      price: 999,
      title: "Mobile Phone",
      qty: 1,
      img: "",
    };
    // this.increaseQuantity = this.increaseQuantity.bind(this);
  }
  increaseQuantity = () => {


    // first => one way to increase quantity of a product:or we can say updating the (state):this will only change the quantity of the product:but not show it on the screen:because we are only increasing the quantity of the (state) object:
    // here we are incrementing the quantity of the (product) by (one):every time the  (user) click on the (increment) button:
    // this.state.qty += 1;

    // second => second way to increment quantity of a product:or we can say updating the (state) is:
    // we can use the (setState) function of the (React-Component):this will direclty change the quantity of a product in the (state) object: and also shows the change quantity  on the (webpage) as well:

    // => there is also the two ways or forms:through which we can use the (setState) function:

    // setState form-1:In first form we can use this function:by simply giving the (object) to it:

    // this.setState({

    //   // here we are changing the  (quantity) in the (state) object:
    //   qty:this.state.qty + 1

    // });

    // IMP = we mostly use this first (form):if we directly want to change something in the particular (key) of the (state) object:
    // means that if we did not want the (previous) value of the (key):for changing it into its new value:
    // like if we want to change the (title) in the (state) object:then we can use this (first) form of the (setState) function:

    // this.setState({

    //   title: "some new title"

    // })



    // setState form-2: In second form we can use this function:by simply giving the (callback - function) to it:
    // that callback function will change the value of the (state) object's (qty)key:
    // IMP => and this (prevState) argument will have the old value of the (qty) key:
    
    this.setState((prevState) => {

      // here we are giving the change value to the state object:so that we can change the value of the quantity key in the state object:
      return{

        qty: prevState.qty + 1
      }

    });


    console.log("this", this.state);


  };

  render() {
    const { price, title, qty } = this.state;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} alt="" />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color: "#777" }}>Rs {price} </div>
          <div style={{ color: "#777" }}>Qty: {qty} </div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img
              alt="increase"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
              onClick={this.increaseQuantity}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/9632/9632763.png"
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
            />
          </div>
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

export default CartItem;
