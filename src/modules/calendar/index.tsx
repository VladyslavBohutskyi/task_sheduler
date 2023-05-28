import { Today } from '@mui/icons-material';
import { Paper, styled } from '@mui/material';
import { observer } from 'mobx-react';
import Calendar from 'react-calendar';
import ThemeStore from '../../store/theme'


const TodoCalendar = observer(() => {
    const CustomCalendar: any = styled(Calendar)`
    .react-calendar__tile--now {
      background: ${ThemeStore.activeTheme.palette.primary.light} !important;
    }
  `

    return (
        <Paper variant={'outlined'}
            sx={{ p: '20px', pt: '25px', borderRadius: '10px', boxShadow: '4px 4px 14px -10px grey' }}
        >
            <CustomCalendar locale={'en'} />
        </Paper>
    )
})

export default TodoCalendar