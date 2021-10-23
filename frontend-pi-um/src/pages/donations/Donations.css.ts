import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  firstGrid: {
    paddingLeft: 20
  },

  body1: {
    marginBottom: 15
  },

  container: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 5
  },

  link: {
    textDecoration: 'none',
    color: 'black'
  }
})

const theme = createTheme({
  components: {
    MuiTypography: {
      defaultProps: {
        fontWeight: 700,
        marginBottom: 1,
      }
    }
  }
})

export default useStyles
export { theme }