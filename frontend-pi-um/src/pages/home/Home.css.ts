import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
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

const theme = createTheme({
  palette: {
    yellowAndWhite: {
      main: colors.mostarda,
      contrastText: 'black',
    },
  },
});

declare module '@mui/material/styles' {
  interface Palette {
    yellowAndWhite: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    yellowAndWhite?: PaletteOptions['primary'];
  }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    yellowAndWhite: true;
  }
}

export default useStyles
export { theme }