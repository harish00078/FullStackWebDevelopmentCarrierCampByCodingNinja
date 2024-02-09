import { useState } from "react";
import { useToasts } from "react-toast-notifications";

import styles from "../styles/settings.module.css";
import { useAuth } from "../hooks";

const UserProfile = () => {
  //  here we have the (user) object:
  const user = {};
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
        <div className={styles.fieldValue}>{user?.email}</div>
      </div>

      <div className={styles.field}>
        <div className={styles.fieldLabel}>Name</div>
        <div className={styles.fieldValue}>{user?.name}</div>
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
