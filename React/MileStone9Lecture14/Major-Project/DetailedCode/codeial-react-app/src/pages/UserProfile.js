// IMP = when we render the (route).it has some-kind(props) with in it:
// but we only want to access the (prop).which we have pass to this (route) by our-self from the another-component:
// so for accessing the (props) of (route).we need to use the (hook).which has been provided to us by the (react-router-dom) library:
// name of that (hook) is (useLocation):
// import { useLocation } from "react-router-dom";

// IMP = here we are importing the (useParams) hook from the (react-router-dom) library:
// (useParams) =  The useParams hook is a powerful tool in React Router that allows you to access and extract dynamic parameters (also known as URL parameters or path variables) from the current URL path within your functional React components.
import { useParams } from "react-router-dom";

import { useToasts } from "react-toast-notifications";

// here we are importing the (loader) component:
import {Loader} from '../components';


import { useEffect, useState } from "react";
import styles from "../styles/settings.module.css";
import { fetchUserProfile } from "../api";
import { useHistory } from "react-router-dom";

const UserProfile = () => {
  // here we are  maintaining the (user) state with the help of (useState) hook:
  // IMP = In this (user) state.we gonna be maintain the other-user's (profile-data) which we are getting from the (API):
  // By default this (user) state gonna be a (empty-object):so that we can put the (user-object) in it.when be get it from the (server) or (API):
  const [user, setUser] = useState({});
  // we also create the another (state):through which we gonna  be maintain the (state) for our (loader) element:
  // we gonna be use this loader-element:when we are try to fetching the (user-profile) data from the (server) with the help of (api):
  // by default it will have the (true) value:so that when (user) get into this page:we will show him the (loader) until we did not get the (user-profile) data from the (server):
  const [loading, setLoading] = useState(true);

  // 1 = first we get the (user-id):
  // here we are calling the (useParams) hook:
  // and from that hook.we are going to get or distruct the (user-id):
  // IMP = (useParams) hook basically provide us the  (component-route) object:
  // and from that (route-object):we can get the (user-id):
  const { userId } = useParams();

  console.log("userId-userProfile-component", userId);

  // here we are calling the (useToasts) library of (react-toast-notification) package:
  const { addToast } = useToasts();
  // here we are calling the (useHistory) hook:
  // IMP = so that if we did not get the (data) related to other-user's profile from the (server):
  // we will redirect the current (user) to the (home-page) again:
  const history = useHistory();




  // 2 = second after getting the (userid).
  // we need to pass that (userid) to the (server):
  // so that we can get the data related to particular (user-profile):
  // IMP = for passing the (userid) to the (server):
  // we need to use the (useEffect) hook in this component:
  // with in that hook.we gonna be call the (function) through which we are passing that (user-id) to the (server):
  // IMP = we have created the (arrow) function in the (userEffect) hook:
  useEffect(() => {
    // IMP = with in the (useEffect) hook:
    // we gonna be create the (another) arrow-function.
    // which is going to be  a (async) fucntion:because with in this function.we are calling the another (function) which is connected to the (server):
    // through this function.we gonna be get the (userProfile-data) which is  related to the particular (user-id):
    const getUser = async () => {
      const response = await fetchUserProfile(userId);

      // if we will get the user-profile-data related to particular (user-id):

      if (response.success) {
        // then we need to pass that (user-proifle) data to the (user) state:
        // so with the help of that (user) state.we can pass on that data to the Component-elements:
        setUser(response.data.user);
        console.log("userProfile-data", response.data.user);
      } else {
        // if we are not able to find out the other(user's) profile-data in the (server):
        // then we need to show the notification to the (user):
        addToast(response.message,{
          appearance:'error',

        });
        // and here we are using the (useHistory) hook:
        // so that we can redirect the current (user) to the (home-page).if we did not get the (data) related to the (user-profile) of the particular (user-id):
        return history.push('/');
      }

      setLoading(false);
    };

    // here we are calling the (getUser) function:
    // which we have create the with in the (useEffect) hook:
    // for fetching the (user-profile) data from the (server):
    getUser();


    // we only want to run this (useEffect) hook:
    // whenever the (userId) get changed:
  }, [userId,history,addToast]);

  // here we are calling the (useLocation) hook:
  // so that we can get the (prop) from it.which we have to pass to it.In the another component:
  // const location = useLocation();
  // console.log("useLocaltion-hook:user-profile:-", location);

  // here we have the (user) object:which will have the (data) related to the particular (user):
  // we are going to get that (user) object from the (route) of this (component).with the help of (useLocation) hook:
  // IMP = when we call the  (useLocation) hook on this (Component).
  // we will have the (state) object related to the (user-data) in the (useLocation) hook:
  // after getting the (state-object) related to the (user-data) in the (useLocation) hook:
  // we can access that (user-data) state-object from the (userLocation) hook in our component.
  // by simply calling the (state) object from the (useLocation) hook:
  // IMP = we can call it in the (user) object.which we have created in this component:or we can say destructed the (state) object in the (user) object by using the (currly-brackets) on it:
  // V.IMP = if we did not have the (state) object in our (Route).then we need to create the (empty).instead of (user) object:because we did not want that our application get (crashed):
  // so for that we have created the (empty-object).with the (user) object:

  // const {user = {}} = location.state;

  if(loading){
    return <Loader/>
  }


  return (
    <div className={styles.settings}>
      <div className={styles.imgContainer}>
        <img
          src="https://cdn-icons-png.flaticon.com/128/13135/13135440.png"
          alt=""
        />
      </div>

      <div className={styles.field}>
        <div className={styles.fieldLabel}>Email</div>
        <div className={styles.fieldValue}>{user.email}</div>
      </div>

      <div className={styles.field}>
        <div className={styles.fieldLabel}>Name</div>
        <div className={styles.fieldValue}>{user.name}</div>
      </div>

      <div className={styles.btnGrp}>
        {/* In User-profile component:
        => we will only have the two-buttons:
        => first is to (add-friend):
        => second is to (remove-friend): */}
        {/* IMP = how we gonna add the buttons in the user-profile component is:
        => if the (user) is already a friend.then we will show the (remove) button on the (user's-profile):
        => if its not the (friend):then we will show the (add-friend) button: */}
        <button className={`button ${styles.saveBtn}`}>Add Friend</button>
        <button className={`button ${styles.saveBtn}`}>Remove Friend</button>
      </div>
    </div>
  );
};

export default UserProfile;
