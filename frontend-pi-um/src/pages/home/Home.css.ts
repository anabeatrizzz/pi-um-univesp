import { makeStyles } from '@mui/styles';
import { CSSProperties } from 'react';
import { colors } from '../../assets/variables';

const useStyles = makeStyles({
  paragraph: {
    color: 'black'
  },

  card: {
    display: 'flex'
  },

  container: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 30,
    paddingRight: 30
  },

  secondGrid: {
    height: '50%'
  },

  typography2ndGrid: {
    marginBottom: 30
  },

  lastDonationsTxt: {
    paddingTop: 50
  },

  carouselCard: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  }
})

const button: CSSProperties = {
  backgroundColor: colors.mostarda,
  color: 'black'
}

const card: CSSProperties = {
  display: 'flex',
  height: '100%'
}

const box: CSSProperties = {
  display: 'flex',
  flexDirection: 'column'
}

const cardContent: CSSProperties = {
  flex: '1 0 auto'
}

const forWhoCardContent: CSSProperties = {

}

export default useStyles
export {
  button,
  card,
  box,
  cardContent,
  forWhoCardContent
}