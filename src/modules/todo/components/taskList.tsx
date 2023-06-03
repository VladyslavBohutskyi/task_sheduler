import { Box } from "@mui/material"
import TaskItem from "./taskItem"
import { todostore } from "../../../store/todo"
import { observer } from "mobx-react"
import { ITaskItem } from "../models"


const TaskList = observer(() => {

  return (
    <Box my={2.5} >
      {
        todostore.todosArray.map((item: ITaskItem) => {
          if ((todostore.filterTasks == item.status || todostore.filterTasks == null) && (todostore.currentDate == item.date)) {
            return (
              <TaskItem key={item.id} title={item.title} body={item.body} id={item.id} status={item.status} />
            )
          }
        })
      }
    </Box>
  )
})

export default TaskList