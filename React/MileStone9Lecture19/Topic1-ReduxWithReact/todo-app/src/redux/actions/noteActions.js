// Defining Action For Notes-Section:
const ADD_NOTE = "Add Note";
const DELETE_NOTE = "Delete Note";

// Action-Creator-Functions For Creating Actions Or Action-Objects:
export const addNote = (text) => ({
  text: text,
  type: ADD_NOTE,
});
export const deleteNote = (id) => ({
    id: id,
    type: DELETE_NOTE,
})