import React from "react";

// here In (cart-item) file:we have created the (cart-item) or (cart-component):we can say:
// with the help of this (cart-item) file: we can create multiple cart-items or components:In  the (Cart) file:

// we convert our cart-item component into the (function) component:
const cartItem = (props) => {

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




  // increaseQuantity = () => {


  //   // setState form-2: In second form we can use this function:by simply giving the (callback - function) to it:
  //   // that callback function will change the value of the (state) object's (qty)key:
  //   // IMP => and this (prevState) argument will have the old value of the (qty) key:
    
  //   this.setState((prevState) => {

  //     return{

  //       qty: prevState.qty + 1
  //     }



  //   },() =>  {


  //     console.log('this state', this.state);


  //   });




  // };



  // decreaseQuantity = () => { 


  //   const {qty} = this.state;

  //   if(qty === 0){

  //     return ;

  //   }

  //   this.setState((prevState) => {


  //     return{

  //       qty: prevState.qty - 1
  //     }

  //   });


  //   console.log("this", this.state);

  // }


  // In function component:we did not need the (render) function:because function component basically are the plain javascript functions:

  // render() {

    // here we are (accessing): those properties or (props) we can say in the (cartitem) file:

    // so that we can gave those (properties) or we can say those (props) to the (cartiem) component:we can do that with the help of the (props) function:

    // and here we are printing them on the console:with the help of the (props) function:

    // console.log('this.props',this.props);

    // here we are giving the cart-item (object) or we can say (product) (properties) and there (values) to the (cartitem) component:with the help of the (props) function:
    // because we  pass those (properties) and there (values) to the (cartitem) component as (props):
    const { price, title, qty } = props.product;


    // here we are storing the (props) functions in the variable:same like we did with the (object)  or (product) of the (cart-item) component: so that we can simply access them with there (names) in the cart-item component (elements):
    const {product, IncreaseQuantity, DecreaseQuantity, DeleteProduct} = props;



    // here we are giving the (properties) or there(values) to the (cartiem) component:with the help of the (state) function:
    // const { price, title, qty } = this.state;

    return (
      <div className="cart-item">
        <div className="left-block">

          {/* here we are giving the (source) or we can say (path) of the (images) to the (image) element:to tell the image element:that from were it has to get the (images):
          
          => every cart-item (Component) or (product) have its image-path:stored with in it:
          => so here we gave the (img) property  of the (product) or (component) to the (image) element:because every product or component have its (image) path stored with in it:*/}

          <img style={styles.image} alt="" src={product.img} />
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
              // here we are giving the (onIncreaseQuantity) function to the (event):as a (function) not as a (reference) of the (function):
              // we are doing that with the help of the (props):because we gave this function to the (cart-item) component as a  argument or parameter we can say:
              // and here we are using that (function) for the (event) handling:

              // IMP = we also have to gave the cart--item (product) as a (props): to this increase quantity function:
              // so that we can get that (product) and increase its quantity:
              onClick={() => IncreaseQuantity(product)}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/9632/9632763.png"

              // here we are giving the (onDecreaseQuantity) function to the (event):as a (function) not as a (reference) of the (function):
              // we are doing that with the help of the (props):because we gave this function to the (cart-item) component as a  argument or parameter we can say:
              // and here we are using that (function) for the (event) handling:

              // IMP = we also have to gave the cart--item (product) as a (props): to this Decrease quantity function:
              // so that we can get that (product) and Decrease its quantity:

              onClick={() => DecreaseQuantity(product)}

            />
            <img
              alt="delete"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"

              // here we are giving the (onDecreaseQuantity) function to the (event):as a (function) not as a (reference) of the (function):
              // we are doing that with the help of the (props):because we gave this function to the (cart-item) component as a  argument or parameter we can say:
              // and here we are using that (function) for the (event) handling:
              onClick={() => DeleteProduct(product.id)}

            />
          </div>
        </div>
      </div>
    );
  // }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: "#ccc",
  },
};

export default cartItem;
