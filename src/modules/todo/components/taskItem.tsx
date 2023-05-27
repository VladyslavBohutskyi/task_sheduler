import { Box, Button, Paper, Typography } from "@mui/material"
import { Check, Delete } from "@mui/icons-material";
import { ITaskItem } from "../models";
import TodoStore from "../../../store/todo"

const TaskItem = ({ title, body, id, status }: ITaskItem) => {

  return (
    <Paper variant={'outlined'}

      sx={{ p: 2, mb: 2, borderRadius: '16px', bgcolor: status ? 'white' : '#f3f7fa' }}>
      <Box display={'flex'} alignItems={'center'} mb={1} pb={1} borderBottom={'1px solid #e7e7e7'}>
        <Typography variant="h6" sx={{ width: '80%' }} >
          {title}
        </Typography>
        <Box sx={{ width: '20%', textAlign: 'end' }}>
          <Button
            onClick={() => TodoStore.changeStatusTask(id)}
            variant={'outlined'}
            sx={{ minWidth: '20px', p: '5px 7px' }}
          >
            {status ? <Check /> : 'Done'}
          </Button>
          <Button
            onClick={() => TodoStore.deleteTask(id)}
            variant={'outlined'}
            sx={{ minWidth: '20px', p: '5px 7px', ml: 1 }}>
            <Delete />
          </Button>
        </Box>
      </Box>
      <Typography>
        {body}
      </Typography>
    </Paper>
  )
}

export default TaskItem
