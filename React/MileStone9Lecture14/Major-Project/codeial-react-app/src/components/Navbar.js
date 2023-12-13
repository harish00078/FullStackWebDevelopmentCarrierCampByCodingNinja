// here we are creating the navbar component:
// it will have a list of links to other pages in our app.

// here we are importing the (css) file:In the navbar component:
// we will import the css-module.which we particularly created for this component:
import styles from "../styles/navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.nav}>
      {/* under the main div.
            => we create the two divs.
            => first div will be the (left) part of our navbar
            => second div will be the (right) part of our navbar*/}

      {/* this (div) have left part of our navbar */}
      <div className={styles.leftDiv}>
        {/* under this we will have (logo's).
                IMP = which will we working as a (links) to the different pages of application. */}
        {/* for giving link.we use (<a></a>) anchor tag.
                => under that (anchor-tag). we will use (Img-tag)acc to react app.
                => we provide source link of the logo to the image-tag */}
        <a href="/">
          <img
            alt=""
            src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
          />
        </a>
      </div>

      {/* this (div) have right part of our navbar */}
      {/* IMP = In right we have (user-profile).and other links like him: */}
      <div className={styles.rightDiv}>
        {/* under main right div.we will create div.
                => which will have link to the (user-profile): */}
        <div className={styles.user}>
          {/* we gave link to this div.
                    => by using (anchor) tag */}
          <a href="/">
            {/* and anchor-tag.we use img-tag.
                        => which will have the user profile-image (source): */}
            <img
              alt=""
              src="https://cdn-icons-png.flaticon.com/128/13135/13135440.png"
              className={styles.userDp}
            />
          </a>
          {/* under anchor-tag.we have span tag.
          => which will repersent the name of the user */}
          <span>harish</span>
        </div>

        {/* under the right-div.
        => we will also have one more div.
        => which will have the (log-in) and (log-out) Buttons. */}
        <div className={styles.navLinks}>
          {/* for creating buttons.we will use the unordered-list-method */}
          <ul>
            {/* under unordered-list-method.we use (list-tag):
                => To repersent the (lists): */}
            <li>
              {/* under List-tag.we will use the anchor-tag.
                    => To create a particular link or button for the particular thing */}
              <a href="/">Log-In</a>
            </li>
            {/* here this another list tag.will have another link. */}
            <li>
              <a href="/">Log-Out</a>
            </li>
            {/* this list-tag.will have link of (register) component: */}
            <li>
              <a href="/">Register</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// here we export our navbar component:
export default Navbar;
