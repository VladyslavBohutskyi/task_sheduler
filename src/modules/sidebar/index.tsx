import { Dns, People, PermMedia, TextSnippetRounded } from "@mui/icons-material";
import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import ThemeStore from '../../store/theme'

const data = [
  {
    icon: <Dns />,
    label: 'Todo List',
    path: '/',
  },
  {
    icon: <People />,
    label: 'My Profile',
    path: '/',
  },
  {
    icon: <PermMedia />,
    label: 'Themes',
    path: '/themes',
  },
  {
    icon: <TextSnippetRounded />,
    label: 'Notes',
    path: '/notes',
  }
];


const Sidebar = () => {
  return (
    <Box>
      <Box
        width={60}
        height={60}
        borderRadius={50}
        mb={4}
        sx={{
          background: `linear-gradient(90deg, rgba(255,255,255,1) 50%, ${ThemeStore.activeTheme.palette.primary.light} 50%)`
        }}
      >
      </Box>
      {
        data.map((item) => ( // () another way {return()}
          <NavLink // route logic
            key={item.label}
            to={item.path}
          >
            <ListItemButton 
            sx={{
              p: 1,
              color: 'rgba(255,255,255,.8)'
            }}
            >
              <ListItemIcon
                sx={{
                  color: 'inherit'
                }}
              >
                {item.icon}
              </ListItemIcon>

              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontSize: 17,
                  fontWeight: '600',
                  color: 'white',
                }}
              />
            </ListItemButton>
          </NavLink>
        ))
      }
    </Box>
  )
}

export default Sidebar