import { useState } from 'react';
import { Button } from '@mui/material'
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { todostore } from "../../../store/todo"

const AddTask = () => {
  const [open, setOpen] = useState(false);
  const [taskItem, setTaskItem] = useState({ title: '', body: '' })




  return (
    <>
      <Button variant="outlined" onClick={() => setOpen(true)} sx={{ height: ' 40px' }}>
        Add New Task
      </Button>
      <Dialog open={open}
        onClose={() => setOpen(false)}
        maxWidth={'sm'}
        fullWidth={true}
      >
        <DialogTitle>
          New Task
        </DialogTitle>
        <DialogContent sx={{ pb: 0 }}>
          <TextField label='Task name'
            fullWidth
            sx={{ mb: 2, mt: 1 }}
            value={taskItem.title}
            onChange={(e) => setTaskItem({ ...taskItem, title: e.target.value, })}
          />
          <TextField label='Description'
            fullWidth
            value={taskItem.body}
            onChange={(e) => setTaskItem({ ...taskItem, body: e.target.value })}
          />
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button variant="outlined" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="outlined" onClick={() => {
            todostore.addNewTask(taskItem)
            setOpen(false)
            setTaskItem({ title: '', body: '' })
          }}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default AddTask


