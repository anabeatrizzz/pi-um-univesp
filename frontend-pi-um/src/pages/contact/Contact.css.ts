import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  textField: {
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: 'black'
    }
  }
});

export default useStyles