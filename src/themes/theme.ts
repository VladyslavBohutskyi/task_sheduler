import {createTheme} from "@mui/material";
import {grey, indigo, orange, purple} from "@mui/material/colors";

const purpleTheme = createTheme({
    palette: {
        primary: {
            main: purple[500],
            contrastText: '#FFFFFF'
        },
        secondary: {
            main: purple["A400"]
        },
        background: {
            default: purple[50],

        },
    },
    typography: {
        fontFamily: 'Quicksand',
        fontSize: 14
    },
})

const blackTheme = createTheme({
    palette: {
        primary: {
            main: '#292929',
            contrastText: grey[50]
        },
        secondary: {
            main: grey[300],
        },
        background: {
            default: grey[700],
            paper: grey[100]
        },
    },
    typography: {
        fontFamily: 'Quicksand',
        fontSize: 14
    },
})
const blueTheme = createTheme({
    palette: {
        primary: {
            main: indigo[500],
            contrastText: '#fff'
        },
        secondary: {
            main: grey["100"]
        },
        background: {
            default: indigo[200],
             paper: indigo[50]
        },
    },
    typography: {
        fontFamily: 'Quicksand',
        fontSize: 14
    },
})
const orangeTheme = createTheme({
    palette: {
        primary: {
            main: orange[500],
            contrastText: '#fff'
        },
        secondary: {
            main: orange['A400']
        },
        background: {
                default: orange[50],
        },
    },
    typography: {
        fontFamily: 'Quicksand',
        fontSize: 14
    },
})

export {purpleTheme, blueTheme, blackTheme, orangeTheme}