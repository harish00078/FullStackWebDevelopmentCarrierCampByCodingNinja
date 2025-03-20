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
  // -> Using the Switch-case statement:
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

    default:
      return state;
  }
}
