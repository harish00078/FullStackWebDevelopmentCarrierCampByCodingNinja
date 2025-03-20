// Import Actions:
import { ADD_NOTE, DELETE_NOTE } from "../actions/noteActions";

// Defining Initial-State:
const initialState = {
  notes: [
    { text: "Finish React project", createdOn: new Date() },
    { text: "Review Redux concepts", createdOn: new Date() },
    { text: "Prepare for coding interview", createdOn: new Date() },
  ],
};

export function noteReducer(state = initialState, action) {
  // -> Using the Switch-case statement:To check types of actions and return updated state accordingly:
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            text: action.text,
            createdOn: new Date(),
          },
        ],
      };
      case DELETE_NOTE:
        
        return{
            ...state,
           // Important: The filter method creates a new array containing only the elements that pass a specific condition (or check) related to a particular note, as defined by the function
            notes: state.notes.filter((note, index) => index !== action.index),
        }

    default:
      return state;
  }
}
