import styles from '../styles/home.module.css';
const FriendList = () => {
    // we will get our friendslist from the (useAuth) custom-hook:
    const auth = useAuth();
    return(
          <div className={styles.friendsList}>
            <div className={styles.header}>
                Friends
            </div>
          </div>
    );

}