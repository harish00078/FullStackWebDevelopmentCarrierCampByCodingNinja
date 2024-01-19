// here we are building the (setting) page:
// through which (user) can do some changes on its profile-data:
// IMP = we only allowed few-sections Of the (profile-structure).
// to the (user) on which they can do some changes on it (profile-data):
// (user) only able to do changes on the (name) and (password) section of its profile-data:

// here we are importing the (useState) hook:
// through which we will basically manage the (states) of this (component-elements);
import { useState } from "react";

// here we are importing our styles-file from styles-folder:
// which we have  created for this (page):
import styles from "../styles/settings.module.css";

// here we are importing the (useAuth) custom-hook:
// through which we will  access the (Auth-Context) of our application:
// under that (context) we will have the (auth-data) related to the (user):
import { useAuth } from "../hooks";

// here we are creating the setting-component:
const Settings = () => {
  // =>here we are creating the multiple (states) with the help of (useState) hook.
  // through which we will basically manage the (states) related to the (elements) of this setting-component:
  // for-example:
  // first is different states of the (form-button) or we can say different-states of the form's different-buttons:
  // second is to manage the (states) related to the (data).which has been given by the (user) through the form's input-tags:

  // IMP = here we are handling the (states) of the form's different buttons:
  // => 1 = first we will manage the state of form's (edit-profile) button:
  // we will gave the name to this state is (editMode):
  // with the help of this (state).we will basically connect our (input-tags) of few-elements of the (form) with the (edit-profile) button:
  // so that whenever user click on the (edit-pofile) button.we will show the (input-tag) to the (user) on the few-elements of the (form):
  // which we wanna gave to the (user) for changing the current (profile-data) through those elements of the form:
  // instead of showing them there (profile-data) values through those form elements:
  // IMP = by default it will have (false) value:
  // so that when user click on the (edit) button.its state get changed into (true):
  // and all those elements which  have connected with this state of edit-button:
  // get reflected on the (form):
  const [editMode, setEditMode] = useState(false);

  // => 2 = second we will manage the state of form's (save-button):
  // in order to show or hide it based on whether user is in edit mode or not:
  // and also when (user) click on this button:
  // IMP = we will basically send the (form-data) to the (server):
  // IMP = also block the (save-button) of  form:until (server) does not (satteled) the first-request of the (user) related to the (form) submission:
  // IMP = by default it will have (false) value:
  // so that when user click on the (save) button.its state get changed into (true):
  // and with in that we will send the (form-data) of the (user) to the (server):
  // and after that also block the (save-button) of the form:
  const [savingForm, setSavingForm] = useState(false);

  // IMP = here we are creating the (states) for handling the (data) of (form) (diff-elements):
  // we are basically getting the input from the (user) related to the few-element of the (form) with the help of (input-tag):
  // for having that data with us. we need to create the (states) for them.
  // so that we can have the (data) of those input-tags.and gave data to the (server):
  // when user click on the form's (save-button):
  // => 3 = first we will create the state for form's (name-element) data:
  const [name, setName] = useState("");
  // => 4 = second we will create the state for form's (password-element) data:
  const [password, setPassword] = useState("");
  // => 5 = third we will create the state for  form's (confirmPassword-element) data:
  const [confirmPassword, setConfirmPassword] = useState("");

  // here we are using the (useAuth) custom-hook:
  // through which we will  access the (Auth-Context) of our application:
  // under that (context) we will have the (auth-data) related to the (user):
  // and with the help of this (context).will (repersent) the (data) of (user) in this page or component:
  // IMP = and also provide the (authority) to the (users).that they can do some changes some changes in there (auth-data):
  // we only allowed (few-sections) to the (user) to do some changes on (auth-data) it:
  // mainly those section are (user-name) and (password):
  // => here we store (useAuth) custom-hook:
  // In the (auth) variable.through which we will call the (useAuth) custom-hook in our application:
  const auth = useAuth();

  // 1 = we need to provide the (styles) to the (elements) of this page or component:
  // we can do that with the help of (className) method.and under that method we will provide the (style-object) to it:
  // we will provide the styles to the (className) method with in the object not in the string:
  // because we have created the styles for our application components in the (module.css) files:
  // that's why for accessing the styles of (module.css) file.we need to use the (object) or currly brackets structure we can say:
  return (
    <div className={styles.settings}>
      {/* => 1 = here we have image container:
        => were have image related to the (user): */}
      <div className={styles.imgContainer}>
        {/* for having or showing the image of  (user):
            => we need to use the (image) tag: */}
        <img
          src="https://cdn-icons-png.flaticon.com/128/13135/13135440.png"
          alt=""
        />
      </div>

      {/* => 2 = here we have container:
        => were we repersent or have our (user) data-fields: */}
      {/* IMP = In first field-container we (repersents) the (email-value) of the (user): */}
      <div className={styles.field}>
        {/* under this container:
            => we have two fields basically:
            => first (field) repersents the (title) or (Label):like (name) or (email) of the (user):
            => second (field) repersents the (value) related to that (title):like the (value) of user's (name) and (email): */}
        {/* first we have (email) field-section: */}
        {/* => this is the first-field: */}
        <div className={styles.fieldLabel}>Email</div>
        {/* => this is the second-field:
        => here we are providing the (value) of the (user-data) to this field.with the help of (useAuth) custom-hook:  */}
        {/* IMP = we also need to add the condition in this field.
        => where we are repersenting the (user-data):
        =>we need to add the (condition) here.that if we have (user-email) then show that (email).otherwise show (undefined)
        :*/}
        {/* => IMp = we can do that with the help of (condition-operator) or (ternary-operator):  
        => there are two ways to use it as well:
        => FIRST-WAY: we can define the hole condition-express.like this (condition ? <expression if true> : <expression if false>)
        => SECOND-WAY: In this way we can simple add the (?).In between and front of the hole value.which we want to (check):*/}
        <div className={styles.fieldValue}>{auth.user?.email}</div>
      </div>

      {/* IMP = In second field-container we (repersents) the (name-value) of the (user): */}
      {/* => IMP = here we are using the (editMode):
      => so that when (user) click on the (edit-button):
      => we will show the input-tag.Instead of  showing the (profile-value) of user'
      s particular profile-section on this particular form-element:
      => so with help of  (input-tag) user will able to change the (value) of that particular-section of its (user-profile): */}

      <div className={styles.field}>
        <div className={styles.fieldLabel}>Name</div>
        {/* => IMP = we are using the condition-operator:
      => so that we can show the input-tag.here acc to the (state) of form's (edit-button): 
      =>if user in the edit-button mode:then we will shpw the input-tag here:
      =>if user not in the edit-button mode.then we will show the (value) of (user-profile) particular-section:*/}
        {editMode ? (
          // here we will get the (data) from (user):
          // related to this particular-section of (user-profile)
          <input
            type="text"
            // here we are showing the current value of (name) state:
            // with the help of (value) keyword:we are basically doing that The value of the input field is set to the current value of the name state.
            value={name}
            // and from here we will get the new-value for  (name) state:
            // IMP= we will get that value with the help of (onChange) event-hanlder:
            // whenever user enter anythings on this (input-tag):
            // we will get that (value).from this input-tag with the help of  (onChange) event-handler:
            // we have create arrow-function under this (event-hanlder).we are passing the event-hanlder to this function as a (argument).with name (e):
            // under that argument we will have the (data) of input-tag:
            // so fetching the data from (event-hanlder).under the arrow-function:
            // we need to use the two-things of event-handler:
            // first is (target) method:
            // second is (value) function:
            // through these two  things.we will able to get the (current-value) of the input-tag:which has been enter by the (user):
            // IMP = and also under that (arrow-function).after getting the (user-value) from that input-tag:
            // we will gave that value to the (name) state.with the help of state's (setName) callback function:
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        ) : (
          <div className={styles.fieldValue}>{auth.user?.name}</div>
        )}
      </div>

      {/* IMP = same thing we need to do with the (password and confirmPassword-element) of form as well:that we did with the (name-element):
      => we need to connect these (elements) with the (state) of form's (edit-button):
      => IMP = we basically put these both elements in the (one-condition).where we connect them with the (state) of form's (edit-button):*/}

      {/* IMP = we gonna do that with the help of (&&) ANd-operator.we gonna basically connect these both password-elements with the (state) of (edit-button).
      => so that whenever (edit-button) state get (true):will show the these both (password-elements) and there input-boxes as well:
      => IMP = we need to use the (fragment) (<> </>).so that we can add the two same  (password-elements) in (one-place):
      = */}

      {editMode && (
        <>
          {/* IMP = the third field-container is different from other field-containers:
      => because In this (field-container): we basically want the  (new-password) value  form the (users): 
      => if they want to change there (password) value:*/}
          {/* IMP = so here In this container.
      => we did not have the (value-field):
      => instead of that we use the (input-tag).through which  (user) will provide the (new-value) for its (password):  */}

          <div className={styles.field}>
            <div className={styles.fieldLabel}>Password</div>
            <input type="password" />
          </div>

          {/* IMP = In fourth field-container we will get the (confirmPassword-value) of the (user):
      => In the same way.we get the (value) for the (password):
      => we also need to get the (value) for (confirm-password) field.because  we are getting the (new-value) for the (password-field) from the (user): */}

          <div className={styles.field}>
            <div className={styles.fieldLabel}>confirm Password</div>

            <input type="password" />
          </div>
        </>
      )}

      {/* In the last.we will have the (button-tag) or (button-container) we can say:
      => through which (user) can submit that(new-data) in its (auth-profile).
      => and get (updated) its (auth-profile) in the (server). */}
      <div className={styles.btnGrp}>
        {/* IMP = we have created the (different) styles for the (button):
        => acc to the (type) of the (button):
        => so defining the (particular) button-style to the (particular-button):
        => we need to use the (string-interpolation) method in the (object).were we gave provide styles to the (elements):
        => with the help of (string-interpolation) method:we can define the (multiple) things in the (one-string):
        => because (string-interpolation) method.basically (convert) every-thing which we have gave to him. In the (one-string): 
        => IMP = so we need to define the (style-value) of (two-classNames) in the  (one-className) object:
        => that'w why  we need to  use the (string-interpolation) method.because it will convert them in the (one-style) value:*/}
        {/* IMP = for adding the more values in the (string-interpolation).we use the (jquery) method: */}
        {/* V.IMP => 1 = here we are connecting our (edit-profile) button with its (state):
        => which we have created for it:
        => we gonna do that with the help of (condition-operator): */}
        {/* V.IMP => 2 = we need to take care of one thing:
        => which is that.we need to show the two buttons for this form:
        => so how and when we gonna show the which button.we need to place those button acc to that logic in the condition-operator.
        => so what we gonna do for that is:
        => when we are in the (true-state) of edit-button.we gonna show the (save-button).so that user can gave its (form-data) to the (server).which they had enter on the form:
        => and when we are in the (false-state) of (edit-button).we gonna show the (edit-button) itself:
        => so that by pressing it:user can go into the (true-state) of (edit-button).and in that state we have the another button.instead of edit-profile button:
        => and that button is (save-button):
        => IMP = we also need to use the (fragments) here.because we are using the two same kind of elements in one-place or condition*/}
        {editMode ? (
          <>
          {/* IMP = we also need to add or write the condition for this button as well:
          =IMP = so we can connect this button with its (state):
          => we gonna do that with the help of (condition-operator):
          => IMP = By managing this button's (state).we gonna (enable) and (disable) this button:
          => because through this button.we are sending the (form-data) to the (server).which has been enter by the user in the form for  updating its profile-data:
          => so we need to disable this button.when user click on it.
          => and enable it again.util we did not get the satteled statement from the server.related to the first-request that has been send by the user through this button: */}
            <button className={`button ${styles.editBtn}`}>{savingForm ? 'Saving..profile..' :'Save Profile'}</button>

            {/* here we are adding the another button:
            => through which we gonna back: */}

          </>
        ) : (
          <button className={`button ${styles.editBtn}`}>Edit Profile</button>
        )}
      </div>
    </div>
  );
};

// here we are exporting the setting-component:
export default Settings;
