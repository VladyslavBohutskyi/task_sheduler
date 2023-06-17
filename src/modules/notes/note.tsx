import { NavLink, useParams } from "react-router-dom"
import { notesStore } from "../../store/notes";
import { Box, Paper, Typography } from "@mui/material";
import AddNote from "./components/add-note";
import { toJS } from "mobx"
import { INote } from "./models";
import { observer } from "mobx-react";


const Note = observer(() => {
  const { noteCategory } = useParams()
  const curentCategory = toJS(notesStore.notesArray).filter((e) => e.categoryUrl == noteCategory)[0]

  return (
    <Paper variant={'outlined'} square
      sx={{ p: '22px', borderRadius: '10px', boxShadow: `4px 4xp 14px -10px ${curentCategory.color}` }} >
      <Box display={'flex'} alignItems={'center'} mb={2}>
        <Typography color={curentCategory.color} variant={'h5'} textTransform={'uppercase'} fontWeight={'600'}>
          {curentCategory.name}
        </Typography>
      </Box>
      {
        curentCategory.notes.map((e: INote) => (
          <NavLink to={`./${e.noteUrl}`} key={e.date}>
            <Paper variant={'outlined'} sx={{ p: 1, pl: 2, mb: 1, borderRadius: '6px' }}>
              <Typography variant={'h6'}>
                {e.title}
              </Typography>
            </Paper>
          </NavLink>
        ))
      }
      <AddNote />
    </Paper>
  )
})

export default Note