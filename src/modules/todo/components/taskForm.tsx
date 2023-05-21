import { Box, Button, ButtonGroup } from "@mui/material"

const buttons = [

  <Button key={'all'} variant="contained">ALL</Button>,
  <Button key={'active'}>ACTIVE</Button>,
  <Button key={'done'}>DONE</Button>,

]

const TaskForm = () => {
  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <ButtonGroup sx={{ height: '40px' }}>
        {buttons}
      </ButtonGroup>
      <Button variant="outlined" sx={{ height: ' 40px' }}>
        Add New Task
      </Button>
    </Box>
  )
}

export default TaskForm