import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import Footer from '../../components/footer';
import Header from '../../components/header';
import useStyles, { theme } from './Donations.css';
import { colors } from '../../assets/variables';
import { ThemeProvider } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

export default function Donations() {
  const styles = useStyles();
  const categories = ['Básico', 'Revestimento', 'Louças', 'Metais', 'Hidráulica', 'Elétrica', 'Pintura', 'Gesso', 'Vidro', 'Esquadrias', 'Portas e janelas']
  const breadcrumbs = [
    <Link className={styles.link} to="#">
      Início
    </Link>,
    <Link className={styles.link} to="#">
      Doações
    </Link>,
    <Link className={styles.link} to="#">
      Básico
    </Link>,
  ];

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <main className={styles.container}>
        <Grid container>
          <Grid
            className={styles.firstGrid}
            item
            xs={2}
          >
            {
              categories.map((categorie) => {
                return (
                  <Typography component="div" variant="body1">
                    <Box color={colors.mostarda} display='inline'>|</Box> {categorie}
                  </Typography>
                )
              })
            }
          </Grid>

          <Grid item xs={10}>
            <Grid
              container
              justifyContent="space-between"
              direction="row"
              alignItems="center"
            >
            <Grid item xs={6}>
              <Stack spacing={2}>
                <Breadcrumbs separator="›" aria-label="breadcrumb">
                  {breadcrumbs}
                </Breadcrumbs>
              </Stack>
            </Grid>
            <Grid item xs={6}>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Buscar"
              inputProps={{ 'aria-label': 'buscar' }}
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
            </Grid>
            </Grid>

            <Grid container spacing={2}>
              {
                Array(10).fill(1).map(() => {
                  return (
                    <Grid item xs={6}>
                      <Card sx={{ display: 'flex', height: '100%' }}>
                        <CardMedia
                          component="img"
                          sx={{ width: 151 }}
                          src="https://place-hold.it/500x500.png"
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                          <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography
                              variant="h6"
                              gutterBottom
                            >
                              <b>20 sacos de cimento</b>
                            </Typography>

                            <Typography
                              variant="subtitle1"
                              gutterBottom
                            >
                              20 sacos de cimento fechados, 2 sacos abertos, mas com ...
                            </Typography>
                          </CardContent>
                        </Box>
                      </Card>
                    </Grid>
                  )
                })
              }
            </Grid>

            
          </Grid>
        </Grid>
      </main>
      <Footer />
    </ThemeProvider>
  )
}