import { PaperProps } from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import { colors } from '../../assets/variables';

const useStyles = makeStyles({
  header: {
    backgroundColor: 'black',
    display: 'flex',
    zIndex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },

  typographyLink: {
    color: colors.mostarda,
    textDecoration: 'none',
    textAlign: 'center',
    marginBottom: -12,
    marginLeft: 10,
    marginRight: 10
  },
  
  link: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 20,
    clear: 'both',
    textDecoration: 'none',
    paddingLeft: 50
  },
  
  li: {
    color: colors.mostarda,
    marginTop: 0,
    marginRight: 15,
    justifyContent: 'space-between',
    fontWeight: 700,
    fontSize: 16
  },

  pipe: {
    color: 'white'
  },

  paragraphsDiv: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },

  ul: {
    display: 'flex',
    justifyContent: 'space-between',
    listStyle: 'none'
  },

  navLink: {
    textDecoration: 'none'
  },

  nav: {
    display: 'block'
  }
})

const paperProps: Partial<PaperProps<"div", {}>> = {
  elevation: 0,
  square: true,
  sx: {
    bgcolor: 'black',
    marginTop: 6,
    borderRadius: 0
  } 
}

export default useStyles
export { paperProps }