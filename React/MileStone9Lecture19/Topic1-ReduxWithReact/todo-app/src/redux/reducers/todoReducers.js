// Importing the Actions or Action-Creator-Functions:which we have created by our selfs:
import {ADD_TODO,TOGGLE_TODO} from "../actions/todoActions"


// Creating Reducers:For (todo) for application:
// -> As we have learned that:Reducers are the (pure) functions:which basically takes (two-arguments) with in them:
// -> First:is (current-state) of the application:
// -> Second:is the (action) which we have to perform on the Current-state and get the new or updated state from it:

function todoReducer(state,action){
    // here we gonna be update the state:acc to the action-type:
    // IMP: for checking actions or action-types and returning our updated state acc to them: we are going to use the (switch and case) statement-method:

   
    switch(action.type){
         // -> first we check the action-type:with the help of (case) method of (switch and case) statement:
         case ADD_TODO:
        // rather than action-types:if we did not get or have any action-type:then we will return the (default) state or we can say the (Current) state of the application:
       
    }

}
