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

    // if we try to increase the (quantity) of the (product):by more than one at a particular time:
    // and for that we create the (number) of (setState) functions:for increasing the (quantity) of the (product) by multiple times:with the help of the (first-form) of the (setState) function:
    // IMP = then this will not work:because of the (batching) system in the (react):
    // Batching:=> this batching system basically convert the same type of the functions into the one set of (function):so that's why those multiple functions get executed by only  once:and because of that the (quantity) of the (product) is only  incremented by once:
    // how react will able to do that (batching):because of the (shallow) rendering feature:
    // shallow rendering: Shallow rendering basically lets you render a component “one level deep” and assert facts about what its render method returns, without worrying about the behavior of child components, which are not instantiated or rendered. This does not require a DOM.

    // In basic words: shallow rendering feature:basically get all the same type of functions:and it will only render the (last-function) from amoung all of them:

    // this.setState({

    //   // here we are changing the  (quantity) in the (state) object:
    //   qty:this.state.qty + 1

    // });

    // this.setState({

    //   // here we are changing the  (quantity) in the (state) object:
    //   qty:this.state.qty + 1

    // });    

    // this.setState({

    //   // here we are changing the  (quantity) in the (state) object:
    //   qty:this.state.qty + 5

    // });


    




    // setState form-2: In second form we can use this function:by simply giving the (callback - function) to it:
    // that callback function will change the value of the (state) object's (qty)key:
    // IMP => and this (prevState) argument will have the old value of the (qty) key:
    
    this.setState((prevState) => {

      // here we are giving the change value to the state object:so that we can change the value of the quantity key in the state object:
      return{

        qty: prevState.qty + 1
      }

    });

    // but if we increase the quantity of the Product:by multiple times with the help of the (second-form) of the setState function:
    // then it will successfully able to increase the quantity of the Product by multiple times:
    // but it will also happen in the (Batching) process:means all those multiple functions only get rendered by once:
    // but In second-form of setState function:we will able to increase the quantity of the Product by multiple times:even if we have (Batching) process happen:
    
    this.setState((prevState) => {

      // here we are giving the change value to the state object:so that we can change the value of the quantity key in the state object:
      return{

        qty: prevState.qty + 1
      }

    });    
    
    this.setState((prevState) => {

      // here we are giving the change value to the state object:so that we can change the value of the quantity key in the state object:
      return{

        qty: prevState.qty + 1
      }

    });



    console.log("this", this.state);


  };


  // here we are creating the (decreaseQuantity) function:
  // for the (decrease) button of the (cartitem):
  decreaseQuantity = () => { 

    // here we put the (check) quantity feature:
    // so that we did not convert the  quantity of the (product) into the (-1):while decreasing it:

    const {qty} = this.state;

    if(qty === 0){

      return ;

    }

    this.setState((prevState) => {

      // here we are giving the change value to the state object:so that we can change the value of the quantity key in the state object:
      return{

        qty: prevState.qty - 1
      }

    });


    console.log("this", this.state);

  }


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
              onClick={this.decreaseQuantity}

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
