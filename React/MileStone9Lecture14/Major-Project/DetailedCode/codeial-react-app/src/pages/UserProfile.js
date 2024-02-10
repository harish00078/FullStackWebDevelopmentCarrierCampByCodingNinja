// IMP = when we render the (route).it has some-kind(props) with in it:
// but we only want to access the (prop).which we have pass to this (route) by our-self from the another-component:
// so for accessing the (props) of (route).we need to use the (hook).which has been provided to us by the (react-router-dom) library:
// name of that (hook) is (useLocation):
import { useLocation } from "react-router-dom";

import styles from "../styles/settings.module.css";

const UserProfile = () => {
  // here we are calling the (useLocation) hook:
  // so that we can get the (prop) from it.which we have to pass to it.In the another component:
  const location = useLocation();
  console.log("useLocaltion-hook:user-profile:-", location);

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



  const {user = {}} = location.state;


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
