import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import RegisterDonation from './pages/register-donation';
import EditDonation from './pages/edit-donation';
import Donations from './pages/donations';
import Donation from './pages/donation';
import SignUp from './pages/signup';
import ResetPassword from './pages/reset-password';
import NotFound from './pages/not-found';
import Contact from './pages/contact';
import PasswordForgotten from './pages/password-forgotten';
import EditRegisterData from './pages/edit-register-data';
import YourDonations from './pages/your-donations';
import { colors } from './assets/variables'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import reportWebVitals from './reportWebVitals';
import Login from './pages/login';
import {
  BrowserRouter, // as rotas da aplicação
  Switch, // indica quais as entradas possiveis
  Route
} from 'react-router-dom';

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        h6: {
          fontWeight: 700,
          marginBottom: 1,
        },
        body1: {
          fontWeight: 700,
          marginBottom: 10,
        },
        body2: {
          fontWeight: 700,
        }
      }
    },
    MuiTextField: {
      defaultProps: {
        InputLabelProps: {
          style: {
            color: colors.grey
          }
        }
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        asterisk: {
          color: colors.red
        },
        "&.Mui-error": {
          color: colors.red
        }
      }
    }
  }
})

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path='/donations' component={Donations} />
        <Route exact path='/donation/:id' component={Donation} /> 
        <Route exact path='/your-donations' component={YourDonations} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/edit-register-data' component={EditRegisterData} />
        <Route exact path='/register-donation' component={RegisterDonation} />
        <Route exact path='/edit-donation/:id' component={EditDonation} />
        <Route exact path='/reset-password' component={ResetPassword} />
        <Route exact path='/password-forgotten' component={PasswordForgotten} />
        <Route exact component={NotFound} />
      </Switch>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();