import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
//import { yellow } from '@mui/material/colors';
import WrapperPage from '../../components/wrapper-page';

/*const Buttonsize = styled(Button)({
  padding: 20,
  lineHeight: 1.0657,

}) */


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const theme = createTheme({
  palette: {
    neutral: {
      main: '#FBD528',
      contrastText: '#000000',
    },
    secondary: {
      main: '#B9BAAC',
      //contrastText: '#B9BAAC',
      },
    },
});

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
    secondary: Palette['secondary']
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
    secondary?: PaletteOptions['secondary']
  }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true;
    secondary: true;
  }
}


export default function Login(){
 return(
  <WrapperPage>
    <Grid container item xs={12}>
      <Typography>
        <p>Faça aqui seu login!</p>
      </Typography>
    </Grid>
    <Box sx={{ height: 501}} >
      <Grid container direction='column' columns={6} justifyContent='center' alignItems='center' spacing={1} >
        <Box sx={{ width: 380, height:292 }}>
          <Card >
            <Grid container direction='column' columns={6} justifyContent='center' alignItems='center' spacing={6} > 
              <Grid item xs>
                <Box sx={{width: 310}}>  
                  <TextField fullWidth id="email" label="E-mail" ></TextField>
                </Box>
              </Grid>
              <Grid item xs>
                <Box sx={{width: 310}}>
                  <TextField fullWidth id="senha" label="Senha" ></TextField>
                </Box>
              </Grid>
              <Grid item xs>
                <ThemeProvider theme={theme}> 
                  <Button id="login" size="large" children="LOGIN" color='neutral' variant="contained" href="#"></Button>
                </ThemeProvider>
              </Grid>
              <Grid xs>
                <ThemeProvider theme={theme}>
                  <Button variant="text" size="small" color='secondary' href="#">Esqueceu a senha?</Button>
                  <Button variant="text" size="small" color='secondary' href="#">Cadastre-se!</Button>
                </ThemeProvider>
              </Grid>
            </Grid> 
        </Card>
       </Box>
      </Grid>
    </Box>
    </WrapperPage>
  )
}
