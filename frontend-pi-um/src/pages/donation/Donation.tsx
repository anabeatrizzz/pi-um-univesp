import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Map from '../../components/map';
import useStyles from './Donation.css'
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

interface IParams {
  id: string;
}

export default function Donation() {
  const params: IParams = useParams();
  const styles = useStyles();
  const breadcrumbs = [
    <Link className={styles.link} to="/">
      Início
    </Link>,
    <Link className={styles.link} to="/donations">
      Doações
    </Link>,
    <Link className={styles.link} to="#">
      Básico
    </Link>,
    <Link className={styles.link} to="#">
      Doação n {params.id}
    </Link>
  ];

  return (
    <>
      <Header />
      <main className={styles.container}>
        <Grid container>
          <Grid item xs={12}>
            <Stack mb={2} spacing={2}>
              <Breadcrumbs separator="›" aria-label="breadcrumb">
                {breadcrumbs}
              </Breadcrumbs>
            </Stack>
          </Grid>

          <Grid container>
            <Grid item xs={4}>
              <img
                src="https://place-hold.it/500x500.png"
                alt="imagem da doação"
                height={300}
                width={300}
              />
            </Grid>
            <Grid item xs={8}>
              <Typography
                variant="subtitle1"
                gutterBottom
              >
                Nome do produto:
              </Typography>

              <Typography
                variant="h6"
                gutterBottom
              >
                Telhas de cerâmica
              </Typography>

              <br />

              <Typography
                variant="subtitle1"
                gutterBottom
              >
                Localização:
              </Typography>

              <Typography
                variant="h6"
                gutterBottom
              >
                Savoy - Itanhaém/SP
              </Typography>

              <br />

              <Typography
                variant="subtitle1"
                gutterBottom
              >
                Data de publicação:
              </Typography>

              <Typography
                variant="body1"
                gutterBottom
              >
                25/12/2021 - 15:43
              </Typography>
            </Grid>

            <Grid mt={2} xs={12}>
              <Typography
                variant="subtitle1"
                gutterBottom
              >
                Descrição:
              </Typography>

              <Typography
                variant="subtitle2"
                gutterBottom
              >
                200 telhas de cerâmica em ótimo estado. Precisa retirar, não fazemos entrega.
              </Typography>
            </Grid>

            <Grid mt={2} xs={12}>
              <Map />
            </Grid>
          </Grid>
        </Grid>
      </main>
      <Footer />
    </>
  )
}