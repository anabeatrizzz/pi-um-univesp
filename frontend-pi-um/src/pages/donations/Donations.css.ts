import { makeStyles } from '@mui/styles';
import { CSSProperties } from 'react';

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

const inputBase: CSSProperties = {
  marginLeft: 1,
  flex: 1
}

const iconButton: CSSProperties = {
  padding: '10px'
}

const card: CSSProperties = {
  display: 'flex',
  height: '100%'
}

const cardMedia: CSSProperties = {
  width: 190
}

const box: CSSProperties = {
  display: 'flex',
  flexDirection: 'column'
}

const cardContent: CSSProperties = {
  flex: '1 0 auto'
}

export default useStyles
export {
  inputBase,
  iconButton,
  card,
  cardMedia,
  box,
  cardContent
}