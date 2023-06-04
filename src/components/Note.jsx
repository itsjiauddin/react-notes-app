import { useState } from "react";
import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function Note() {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const navigate = useNavigate();

  const handleClick = async () => {
    if (note) {
      await addDoc(collection(db, "notes"), {
        title,
        note,
      });
      setTitle("");
      setNote("");
      navigate("/");
    }
  };

  return (
    <div className="flex flex-col space-y-6 max-w-lg mx-auto">
      <input
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="bg-yellow-100 p-2 outline-none rounded-md"
        type="text"
        placeholder="Title"
      />
      <textarea
        name="note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Take a note"
        className="bg-yellow-100 p-2 outline-none rounded-md h-40"
      ></textarea>
      <button onClick={handleClick}>
        <p className="bg-yellow-300 mx-48 py-2 rounded-md">Add</p>
      </button>
    </div>
  );
}
