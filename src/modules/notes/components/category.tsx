import { Typography } from "@mui/material"
import { ICategory } from "../models"

const CategoryNotes = ({name, color}: ICategory) => {
  return (
    <>
    <Typography color={color} variant={'h5'} textTransform={'uppercase'} fontWeight={'600'}>
      {name}
    </Typography>

    </>
  )
}


export default CategoryNotes