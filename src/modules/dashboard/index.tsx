import { Avatar, Typography, Box } from "@mui/material";
import TodoStore from '../../store/todo'
import { observer } from "mobx-react";

const Dashboard = observer(() => {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      borderBottom={"2px solid"}
      borderColor={"secondary.light"}
      pb={2}
      mb={1}
    >

      <Typography
        variant="h4" //visual
        component={"h2"} //tag
        color={"secondary.main"}
        fontWeight={500}
      >
        {TodoStore.currentDate}
      </Typography>

      <Box
        display={"flex"}
        alignItems={"center"}
        pr={2}
      >
        <Avatar
          sx={{
            bgcolor: "secondary.main",
            height: 56,
            width: 56,
            mr: 2,
            color: "bacground.default",
            fontWeight: 600
          }}
        >
          VB
        </Avatar>

        <Typography
          variant="h4"
          component={"p"}
          fontWeight={500}
          color={"secondary.main"}
        >
          Vladyslav Bohutskyi
        </Typography>

      </Box>

    </Box>
  )
})

export default Dashboard