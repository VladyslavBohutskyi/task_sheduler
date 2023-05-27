import { Box } from "@mui/material"
import TaskItem from "./taskItem"
import TodoStore from "../../../store/todo"
import { observer } from "mobx-react"


const TaskList = observer(() => {
  
  return (
    <Box my={2.5} >
      {
        TodoStore.todosArray.map((item) => (
          <TaskItem key={item.id} title={item.title} body={item.body} id={item.id} status={item.status}/>
        ))
      }
    </Box>
  )
})

export default TaskList