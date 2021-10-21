import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  header: {
    backgroundColor: 'black',
    display: 'flex',
    zIndex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
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
    color: '#FBD528',
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

export default useStyles