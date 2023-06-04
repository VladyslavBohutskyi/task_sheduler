import { Typography } from "@mui/material";
import { useParams } from "react-router-dom"
import { notesStore } from "../../store/notes";

const NoteDetails = () => {
  const { noteCategory, noteDetails } = useParams()
  console.log(noteCategory, ' ', noteDetails);

  return (
    <p>nodetail</p>
  )
}


export default NoteDetails
