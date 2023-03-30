import React from "react";

// here In (cart-item) file:we have created the (cart-item) or (cart-component):we can say:
// with the help of this (cart-item) file: we can create multiple cart-items or components:In  the (Cart) file:
class CartItem extends React.Component {

  // constructor() {
  //   super();
  //   this.state = {
  //     price: 999,
  //     title: "Mobile Phone",
  //     qty: 1,
  //     img: "",
  //   };

  //   // this.increaseQuantity = this.increaseQuantity.bind(this);

  // }




  increaseQuantity = () => {


    // setState form-2: In second form we can use this function:by simply giving the (callback - function) to it:
    // that callback function will change the value of the (state) object's (qty)key:
    // IMP => and this (prevState) argument will have the old value of the (qty) key:
    
    this.setState((prevState) => {

      return{

        qty: prevState.qty + 1
      }



    },() =>  {


      console.log('this state', this.state);


    });




  };



  decreaseQuantity = () => { 


    const {qty} = this.state;

    if(qty === 0){

      return ;

    }

    this.setState((prevState) => {


      return{

        qty: prevState.qty - 1
      }

    });


    console.log("this", this.state);

  }


  render() {

    // here we are (accessing): those properties or (props) we can say in the (cartitem) file:

    // so that we can gave those (properties) or we can say those (props) to the (cartiem) component:we can do that with the help of the (props) function:

    // and here we are printing them on the console:with the help of the (props) function:

    console.log('this.props',this.props);

    // here we are giving the (properties) or we can say (props) and there (values) to the (cartitem) component:with the help of the (props) function:
    // that we have created in the (state) object:
    const { price, title, qty } = this.props.product;



    // here we are giving the (properties) or there(values) to the (cartiem) component:with the help of the (state) function:
    // const { price, title, qty } = this.state;

    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} alt="" src="" />
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
