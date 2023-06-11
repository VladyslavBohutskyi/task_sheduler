import { useParams } from "react-router-dom"
import { notesStore } from "../../store/notes";
import { Box, Paper, Typography } from "@mui/material";
import AddNote from "./components/add-note";



const Note = () => {
  const { noteCategory } = useParams()
  const categoryIndex = notesStore.notesArray.findIndex((e) => e.categoryUrl == noteCategory)
  const curentCategory = notesStore.notesArray[categoryIndex]

  return (
      <Paper variant={'outlined'} square={true}
        sx={{ p: '22px', borderRadius: '10px', boxShadow: `4px 4xp 14px -10px ${curentCategory.color}` }} >
        <Box display={'flex'} alignItems={'center'} mb={2}>
          <Typography color={curentCategory.color} variant={'h5'} textTransform={'uppercase'} fontWeight={'600'}>
            {curentCategory.name}
          </Typography>
        </Box>

        <AddNote />

      </Paper>
  )
}

export default Note