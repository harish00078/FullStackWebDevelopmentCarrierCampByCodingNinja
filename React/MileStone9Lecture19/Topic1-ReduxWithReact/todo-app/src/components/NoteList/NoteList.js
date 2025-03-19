import "./NoteList.css";

function NoteList() {
    const notes = [
        {text: "Finish React project",createdOn: new Date() },
        {  text: "Review Redux concepts" ,createdOn: new Date()},
        {  text: "Prepare for coding interview",createdOn: new Date() }
    ];

    return (
        <div className="container">
            <ul>
                {notes.map((note, index) => (
                    <li key={index}>
                        <p>{note.createdOn.toLocaleDateString()}</p>
                        <p className="note-content">{note.text}</p>
                        <button className="btn btn-danger">Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}




export default NoteList;
