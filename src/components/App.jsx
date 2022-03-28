import React, { useState, useEffect } from "react";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { v4 as uuidv4 } from "uuid";
// import HeroBG from "./HeroBG";
import Axios from "axios";

export default function App() {
  const [notes, setNotes] = useState([]);

  function addItem(inputText) {
    setNotes((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  function deleteNote(id) {
    Axios.delete(`https://dungy-keeper-app.herokuapp.com/delete/${id}`).then((response) => {
      setNotes(notes.filter((val) => {
        return val._id !== id
      }))
    })
  }

  useEffect(() => {
    Axios.get("https://dungy-keeper-app.herokuapp.com/read/").then((response) => {
      setNotes(response.data);
    });
  }, []);

  return (
    <div>
      <Header />
      {/* <HeroBG /> */}
      <CreateArea onAdd={addItem} />
      {notes.map((val, id) => {
        return (
          <Note
            key={uuidv4()}
            id={val._id}
            onDelete={deleteNote}
            title={val.title}
            content={val.note}
          />
        );
      })}
    </div>
  );
}
