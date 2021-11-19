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
  display: 'flex',
  height: '100%'
}

export default useStyles
export { card }