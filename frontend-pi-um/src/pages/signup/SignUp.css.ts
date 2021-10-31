import { makeStyles } from '@mui/styles';
import { colors } from '../../assets/variables';

const useStyles = makeStyles({
  typography: {
    color: colors.red
  },
  textField: {
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: colors.grey,
      borderWidth: 1
    }
  }
})

export default useStyles