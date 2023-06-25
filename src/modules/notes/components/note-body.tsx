import { Box, SvgIcon, Typography } from "@mui/material"
import { useState, useEffect } from "react"
import { IBody } from "../models"
import { Category, Edit, Save } from '@mui/icons-material';
import MDEditor from "@uiw/react-md-editor";
import { notesStore } from "../../../store/notes";



const NoteBody = ({ color, body: initBody, category, name }: IBody) => {
  const [edit, setEdit] = useState(true)
  const [body, setValue] = useState(() => initBody)
  useEffect(() => (setValue(initBody)), [initBody])


  return (
    <>

      <Box position={'absolute'} right={'25px'} top={'25px'} display={'flex'}>
        {
          edit
            ?
            <Box onClick={() => (setEdit(!edit))}
              display={'flex'} alignItems={'center'} mb={2} sx={{ cursor: 'pointer' }}>
              <SvgIcon sx={{ color: color, fontSize: '20px', mr: 0.2 }}>
                <Edit />
              </SvgIcon>
              <Typography variant={'h6'} fontWeight={'300'} color={color}>
                edit
              </Typography>
            </Box>
            :
            <Box onClick={() => (notesStore.saveNote({ category, name, body }), setEdit(!edit))}
              display={'flex'} alignItems={'center'} mb={2} ml={2} sx={{ cursor: 'pointer' }} >
              <SvgIcon sx={{ color: color, fontSize: '20px', mr: 0.2 }}>
                <Save />
              </SvgIcon>
              <Typography variant={'h6'} fontWeight={'300'} sx={{ color: color }}>
                save
              </Typography>
            </Box>
        }
      </Box>
      {
        edit
          ?
          <MDEditor.Markdown source={body} />
          :
          <MDEditor value={body} onChange={(val) => { setValue(val!) }} />
      }

    </>
  )
}


export default NoteBody