import { Button, Box } from "@mui/material";
import { purpleTheme, blueTheme, blackTheme, orangeTheme } from '../../themes';
import React from "react";
import { ExposureTwoTone } from "@mui/icons-material";

const data = [
  {
    name: 'Purple Theme',
    theme: purpleTheme,
  },
  {
    name: 'Blue Theme',
    theme: blueTheme,
  },
  {
    name: 'Black Theme',
    theme: blackTheme,
  },
  {
    name: 'Orange Theme',
    theme: orangeTheme,
  },
]

interface SetThemes {
  setTheme: Function,
  // width?: number // ? not necessarily
}


const Themes = ({ setTheme }: SetThemes) => {
  return (
    <>
      {
        data.map((item) => (
          <Box
            display={'block'}
            mb={3}
          >
            <Button
              variant='contained'
              sx={{
                backgroundColor: item.theme.palette.primary.main,
                width: 150,
                height: 50,
              }}
              onClick={() => setTheme(item.theme)}
            >
              {item.name}
            </Button>
          </Box>
        ))
      }
    </>
  )
}

export default Themes
{/* <Box
  display={'block'}
  mb={3}
>
  <Button
    sx={{
      backgroundColor: blueTheme.palette.primary.main,
      "&:hover": {
        backgroundColor: blueTheme.palette.background.default
      },
    }}
    variant='contained'>blue Theme
  </Button>
</Box>

<Box
  display={'block'}
  mb={3}
>
  <Button
    sx={{
      backgroundColor: blackTheme.palette.primary.main,
      "&:hover": {
        backgroundColor: blackTheme.palette.background.default
      },
    }}
    variant='contained'>black Theme
  </Button>
</Box>

<Box
  display={'block'}
  mb={3}
>
  <Button
    sx={{
      backgroundColor: orangeTheme.palette.primary.main,
      "&:hover": {
        backgroundColor: orangeTheme.palette.secondary.main
      },
    }}
    variant='contained'>orange Theme
  </Button>
</Box> */}