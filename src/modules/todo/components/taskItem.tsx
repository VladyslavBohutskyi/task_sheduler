import { Box, Button, Paper, Typography } from "@mui/material"
import { Check, Delete, TimeToLeave } from "@mui/icons-material";
import { ITaskItem } from "../models";

const TaskItem = ({title , body}: ITaskItem) => {
  return (
    <Paper variant={'outlined'}
      sx={{ p: 2, mb: 2, borderRadius: '16px' }}>
      <Box display={'flex'} alignItems={'center'} mb={1} pb={1} borderBottom={'1px solid #e7e7e7'}>
        <Typography variant="h6" sx={{ width: '80%' }} >
          {title}
        </Typography>
        <Box sx={{ width: '20%', textAlign: 'end' }}>
          <Button variant={'outlined'} sx={{ minWidth: '20px', p: '5px 7px' }}>
            <Check />
          </Button>
          <Button variant={'outlined'} sx={{ minWidth: '20px', p: '5px 7px', ml: 1 }}>
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
