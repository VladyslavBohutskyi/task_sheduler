import { Box } from "@mui/system";
import { observer } from "mobx-react";
import { notesStore } from "../../store/notes";
import { Paper } from "@mui/material";
import { ICategory } from "./models";
import { useId } from "react";
import { NavLink } from "react-router-dom";
import CategoryNotes from "./components/category";


const Notes = observer(() => {
  let testId = useId()
  return (
    <Box display={'flex'} flexWrap={'wrap'} m={'-5px'}>
      {
        notesStore.notesArray.map((e: ICategory) => ( 
            <Paper key={useId()}
              sx={{
                flexBasis: 'calc(33% - 10px)',
                position: 'relative',
                minHeight: '205px',
                m: '5px',
                flexGrow: '1',
                cursor: 'pointer',
                borderRadius: '10px',
              }}
            >
              <NavLink
                to={`./${e.categoryUrl}`}
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  padding: '30px',
                }}
              >
                <CategoryNotes  name={e.name} color={e.color} />
              </NavLink>
            </Paper>
        ))
      }
    </Box>
  )
})

export default Notes