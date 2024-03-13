import styles from "../styles/home.module.css";
import { useAuth } from "../hooks";
const FriendList = () => {
  // we will get our friendslist from the (useAuth) custom-hook:
  // because it will have the data-related to our authenticated (user):
  const auth = useAuth();
  // here we are (destructuring) friends from (useAuth) custom-hook:and passing them to the empty(array):
  // IMP => (Destructuring) =  Destructuring is a JavaScript feature introduced in ES6 that allows you to extract specific values from objects or arrays and assign them to variables.
  const { friends = [] } = auth.user;
  return (
    <div className={styles.friendsList}>
      <div className={styles.header}>
        Friends
        {/* here we are putting the friends:which we are basically getting from (useAuth) custom-hook: */}
        {/* IMP = first we check that if did not have any friends in the array:*/}
        {friends && friends.length === 0 && (
          <div className={styles.noFriends}>
            {/* then we will show this (div-element) value */}
            NO Friends Found
          </div>
        )}
        {/* IMP = second if we have the friends in the array:
        => then we have to (map) over on those friends.and show them through this (div-element): */}
        {/*  IMP = we also pass the (friend's) object or document (id) to this div-element:
        => so that with the help of (link): when user clicks the link:
        => we can transfer the (user) to the (friends) user-profile: */}
        {friends &&
          friends.map((friend) => <div key={`friend-${friend._id}`}>
            {/* here we are passing the url of (user-profile) component:to this Link-tag:
            => because (friend-id's) are similar to the (user-id's):basically the (friend) object or documents are made from the (user) object or documents:  */}
            <Link className={styles.friendItem} to={`/user/${friend._id}`}>
              {/* here we are showing the details of the (friends):
              => like there (names) and (images):*/}
              <div className={styles.friendImg}>
                <img src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png" alt=""/>
              </div>
            </Link>
          </div>)}
      </div>
    </div>
  );
};
