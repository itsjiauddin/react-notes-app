import { db } from "../firebase/config";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";

export default function NoteItem() {
  const [notes, setNotes] = useState([]);

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "notes"));
    const documents = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setNotes(documents);
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "notes", id));
  };

  useEffect(() => {
    getData();
  }, [notes]);

  return (
    <div className="grid grid-cols-3 gap-10 place-items-center">
      {notes &&
        notes.map((note) => (
          <div
            key={note.id}
            className="bg-yellow-100 rounded-md shadow-md p-4 h-40 w-80"
          >
            <div className="flex justify-between">
              <div>
                <h3>{note.title}</h3>
                <p>{note.note}</p>
              </div>
              <MdDeleteForever
                className="cursor-pointer"
                size={30}
                onClick={() => handleDelete(note.id)}
              />
            </div>
          </div>
        ))}
    </div>
  );
}
