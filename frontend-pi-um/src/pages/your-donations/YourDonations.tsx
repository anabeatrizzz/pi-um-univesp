import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Button from '../../components/button';
import useStyles, { card } from './YourDonations.css';
import WrapperPage from '../../components/wrapper-page';
import { CardMedia, Box, CardContent } from '@mui/material';

export default function YourDonations() {
  const styles = useStyles();

  return (
    <WrapperPage>
      <Grid container>
        <Grid item xs={12}>
          <Typography fontSize={24} variant="body1">
            Maria - Doações cadastradas
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {
          Array(4).fill(1).map((_, index) => {
            const linkTo = `/edit-donation/${index + 1}`
            return (
              <Grid item xs={6}>
                <Card sx={card}>
                  <CardMedia
                    component="img"
                    sx={{ width: 190 }}
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
                        variant="subtitle2"
                        gutterBottom
                      >
                        20 sacos de cimento fechados, 2 sacos abertos, mas com ...
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        gutterBottom
                      >
                        12/04/2021 - 15:34
                      </Typography>
                      <Link className={styles.link} to={linkTo}>
                        <Typography
                          variant="subtitle2"
                          gutterBottom
                          align="right"
                        >
                          Editar
                        </Typography>
                      </Link>
                    </CardContent>
                  </Box>
                </Card>
              </Grid>
            )
          })
        }
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="flex-end"
        spacing={2}
      >
        <Grid item mt={2} xs={3}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="stretch"
          >
            <Button text="Nova doação" />
          </Grid>
        </Grid>
      </Grid>
    </WrapperPage>
  )
}
