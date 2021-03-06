import { makeStyles } from '@mui/styles';
import { colors } from '../../assets/variables';

const useStyles = makeStyles({
  footer: {
    backgroundColor: 'black',
    display: 'flex',
    paddingLeft: 50,
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
  },

  paragraph: {
    color: colors.mostarda,
    fontWeight: 700,
    textDecoration: 'none',
    marginRight: 15,
    marginBottom: 15,
    marginTop: 5,
    fontSize: 12
  }
})

export default useStyles