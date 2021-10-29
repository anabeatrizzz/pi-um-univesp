import { makeStyles } from '@mui/styles';
import { CSSProperties } from '@mui/system';

const useStyles = makeStyles({
  link: {
    color: '#B9BAAC',
    textDecoration: 'none',
    fontWeight: 500,
    fontSize: 16,
  }
})

const card: CSSProperties = {
  paddingRight: 5,
  paddingLeft: 5,
  width: 300
}

export default useStyles
export { card }