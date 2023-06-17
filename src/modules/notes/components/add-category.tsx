import { Add } from "@mui/icons-material"
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Fab, Menu, MenuItem, Stack, SvgIcon, TextField, } from "@mui/material"
import { useState } from "react"
import PopupState, { bindTrigger, bindPopover, bindMenu } from 'material-ui-popup-state';
import Colors from "./colors";
import IconsArray from "./icons";
import { notesStore } from "../../../store/notes";



const AddCategory = () => {
  const [open, setOpen] = useState(false)
  const [category, setCategory] = useState('')
  const [colorIcon, setColorIcon] = useState(Colors[0])
  const [categoryIcon, setCategoryIcon] = useState(IconsArray[0])
  const [categoryIconIndex, setCategoryIconIndex] = useState(0)


  function addNewCategory() {
    setOpen(false)
    const curUrl = category.trim().replaceAll(' ', '-').toLowerCase()
    notesStore.addNoteCategory(
      {
        icon: categoryIconIndex,
        categoryUrl: curUrl,
        name: category.trim().toLowerCase(),
        color: colorIcon,
        notes: []
      },
    )
  }


  return (
    <>
      <Box
        display={'flex'} justifyContent={'flex-end'} mt={2}
      >
        <Fab color="primary" aria-label='add' onClick={() => setOpen(true)}>
          <Add />
        </Fab>
      </Box>
      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth={'sm'}
      >
        <DialogTitle>
          Create new category
        </DialogTitle>
        <DialogContent>
          <TextField fullWidth label={'Add Category'} margin='dense'
            onChange={(e) => setCategory(e.target.value)}
          />
        </DialogContent>
        <DialogActions sx={{ p: '0 24px', pb: '20px', justifyContent: 'space-between' }}>
          <Stack direction={'row'} alignItems='center'>
            <PopupState variant="popover" popupId="popup-color-menu">
              {(popupState) => (
                <>
                  <Button {...bindTrigger(popupState)}
                    variant='contained'
                    sx={{
                      width: 30,
                      minWidth: 30,
                      height: 30,
                      backgroundColor: colorIcon,
                      mr: 1
                    }}
                  >
                  </Button>
                  <Menu {...bindMenu(popupState)} >
                    {
                      Colors.map((e, i) =>
                        <MenuItem key={e + i}
                          onClick={
                            () => {
                              setColorIcon(e)
                              popupState.close()
                            }
                          }
                        >
                          <Box width={20} height={20} bgcolor={e}></Box>
                        </MenuItem>
                      )
                    }
                  </Menu>
                </>
              )}
            </PopupState>
            <PopupState variant="popover" popupId="popup-icon-menu">
              {(popupState) => (
                <>
                  <Button {...bindTrigger(popupState)}
                    variant='text'
                    sx={{
                      width: 40,
                      minWidth: 40,
                      height: 40,
                      backgroundColor: 'unset',
                      color: colorIcon
                    }}
                  >
                    <SvgIcon sx={{ fontSize: 40 }}>{categoryIcon}</SvgIcon>
                  </Button>
                  <Menu {...bindMenu(popupState)} >
                    {
                      IconsArray.map((e, i) =>
                        <MenuItem sx={{color: colorIcon}}
                        key={i}
                          onClick={
                            () => {
                              setCategoryIcon(e)
                              popupState.close()
                              setCategoryIconIndex(i)
                            }
                          } 
                        >
                          {e}
                        </MenuItem>
                      )
                    }
                  </Menu>
                </>
              )}
            </PopupState>
          </Stack>
          <Button variant="outlined" onClick={() => {
            addNewCategory()
          }}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}


export default AddCategory