import { Box, Button, ButtonGroup } from "@mui/material"
import AddTask from "./addTask"
import { observer } from "mobx-react"
import { todostore } from "../../../store/todo"

const TaskForm = observer(() => {

  const buttons = [
    <Button variant={todostore.filterTasks == null ? 'contained' : 'outlined'}
      key={'all'} onClick={() => { todostore.filteredTask(null) }}>
      ALL
    </Button>,

    <Button variant={todostore.filterTasks == true ? 'contained' : 'outlined'}
      key={'active'} onClick={() => { todostore.filteredTask(true) }}>
      ACTIVE
    </Button>,

    <Button variant={todostore.filterTasks == false ? 'contained' : 'outlined'}
      key={'done'} onClick={() => { todostore.filteredTask(false) }}>
      DONE
    </Button>,
  ]

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <ButtonGroup sx={{ height: '40px' }}>
        {buttons}
      </ButtonGroup>
      <AddTask />
    </Box>
  )
})

export default TaskForm