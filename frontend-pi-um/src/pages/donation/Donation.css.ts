import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  container: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 30
  },

  link: {
    textDecoration: 'none',
    color: 'black',
    fontWeight: 500,
    fontSize: 16
  }
})

const modal = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  boxShadow: 24,
  p: 4
};

export default useStyles
export { modal }