import { SvgIcon, Typography } from "@mui/material"
import { ICategory } from "../models"
import IconsArray from "./icons"
import Colors from "./colors"


const CategoryNotes = ({ name, color, icon }: ICategory) => {
  return (
    <>
      <SvgIcon sx={{color: Colors[color], fontSize: '45px', mb: 3, }}>
        {IconsArray[icon]}
      </SvgIcon>
      <Typography color={Colors[color]} variant={'h5'} textTransform={'uppercase'} fontWeight={'600'}>
        {name}
      </Typography>

    </>
  )
}


export default CategoryNotes