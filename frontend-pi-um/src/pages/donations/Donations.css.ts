import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { CSSProperties } from 'react'

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
    paddingLeft: 5,
    //paddingRight: 30
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