import { Button, Box } from "@mui/material";
import { purpleTheme, blueTheme, blackTheme, orangeTheme } from '../../themes';
import ThemeStore from "../../store/theme";



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
            key={item.name}
            display={'block'}
            mb={3}
          >
            <Box
              border={"4px solid"}
              borderColor={item.theme.palette.primary.main}
              display={"inline-flex"}
              width={"100%"}
              mb={1}
            >
              <Box bgcolor={item.theme.palette.primary.light} width={"14.3%"} height={"55px"}></Box>
              <Box bgcolor={item.theme.palette.primary.main} width={"14.3%"} height={"55px"}></Box>
              <Box bgcolor={item.theme.palette.primary.dark} width={"14.3%"} height={"55px"}></Box>
              <Box bgcolor={item.theme.palette.background.default} width={"14.3%"} height={"55px"}></Box>
              <Box bgcolor={item.theme.palette.secondary.light} width={"14.3%"} height={"55px"}></Box>
              <Box bgcolor={item.theme.palette.secondary.main} width={"14.3%"} height={"55px"}></Box>
              <Box bgcolor={item.theme.palette.secondary.dark} width={"14.3%"} height={"55px"}></Box>
            </Box>
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