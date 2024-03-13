import styles from '../styles/home.module.css';
const FriendList = () => {
    // we will get our friendslist from the (useAuth) custom-hook:
    // because it will have the data-related to our authenticated (user):  
    const auth = useAuth();
    return(
          <div className={styles.friendsList}>
            <div className={styles.header}>
                Friends
            </div>
          </div>
    );

}