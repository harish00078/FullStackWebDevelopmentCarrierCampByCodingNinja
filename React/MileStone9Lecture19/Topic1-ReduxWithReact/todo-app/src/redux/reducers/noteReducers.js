// Import Actions:
import { ADD_NOTE, DELETE_NOTE } from "../actions/noteActions";

// Defining Initial-State:
const initialState = {
     notes :[
        {text: "Finish React project",createdOn: new Date() },
        {  text: "Review Redux concepts" ,createdOn: new Date()},
        {  text: "Prepare for coding interview",createdOn: new Date() }
    ],
};
