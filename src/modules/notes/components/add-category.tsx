import { Add } from "@mui/icons-material"
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Fab, Menu, MenuItem, Stack, TextField, } from "@mui/material"
import { useState } from "react"
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import Popover from '@mui/material/Popover';


const AddCategory = () => {
  const [open, setOpen] = useState(false)



  return (
    <>
      <Box
        display={'flex'} justifyContent={'flex-end'} mt={2}
        onClick={() => setOpen(true)}
      >
        <Fab color="primary" aria-label='add'>
          <Add />
        </Fab>
      </Box>
      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth={'sm'}
      >
        <DialogTitle>
          Create new category
        </DialogTitle>
        <DialogContent>
          <TextField fullWidth label={'Add Category'} margin='dense' />
        </DialogContent>
        <DialogActions sx={{ p: '0 24px', pb: '20px', justifyContent: 'space-between' }}>
          <Stack direction={'row'}>
            <PopupState variant="popover" popupId="popup-color-menu">
              {(popupState) => (
                <>
                  <Button variant="contained" {...bindTrigger(popupState)}>
                    Open Popover
                  </Button>
                  <Menu 
                  {...bindPopover(popupState)}
                  >
                    <MenuItem>1</MenuItem>
                    <MenuItem>2</MenuItem>
                    <MenuItem>3</MenuItem>
                  </Menu>
                </>
              )}
            </PopupState>
          </Stack>
        </DialogActions>
      </Dialog>
    </>
  )
}


export default AddCategory