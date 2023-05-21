import { Box } from "@mui/material"
import TaskItem from "./taskItem"

const tasks = [
  {
    title: 'Drink coffe',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, ad eos'
  },
  {
    title: 'Take shower',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, ad eos'
  },
  {
    title: 'Have breakfast',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, ad eos'
  },
]

const TaskList = () => {
  return (
    <Box my={2.5} >

      {
        tasks.map((item) => (
          <TaskItem key={item.title} title={item.title} body={item.body} />
        ))
      }
    </Box>
  )
}

export default TaskList