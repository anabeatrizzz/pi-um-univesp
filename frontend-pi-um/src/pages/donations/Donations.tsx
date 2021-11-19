import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import useStyles, { box, card, cardContent, cardMedia, iconButton, inputBase } from './Donations.css';
import { colors } from '../../assets/variables';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Pagination from '@mui/material/Pagination';
import WrapperPage from '../../components/wrapper-page';

export default function Donations() {
  const styles = useStyles();
  const categories = ['Básico', 'Revestimento', 'Louças', 'Metais', 'Hidráulica', 'Elétrica', 'Pintura', 'Gesso', 'Vidro', 'Esquadrias', 'Portas e janelas']
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
  ];

  return (
      <WrapperPage paddingLeft={false}>
          <Grid container>
            <Grid
              className={styles.firstGrid}
              item
              xs={2}
            >
              {
                categories.map((category) => {
                  return (
                    <Link key={category} to="#" className={styles.link}>
                      <Typography component="div" variant="body1">
                        <Box color={colors.mostarda} display='inline'>|</Box> {category}
                      </Typography>
                    </Link>
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
                mb={2}
              >
                <Grid item xs={8}>
                  <Stack spacing={2}>
                    <Breadcrumbs separator="›" aria-label="breadcrumb">
                      {breadcrumbs}
                    </Breadcrumbs>
                  </Stack>
                </Grid>
                <Grid item xs={4}>
                <InputBase
                  sx={inputBase}
                  placeholder="Buscar"
                  inputProps={{ 'aria-label': 'buscar' }}
                />
                <IconButton type="submit" sx={iconButton} aria-label="search">
                  <SearchIcon />
                </IconButton>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                {
                  Array(6).fill(1).map((_, index) => {
                    const linkTo = `/donation/${index+1}`
                    return (
                      <Grid key={index} item xs={6}>
                        <Card sx={{ display: 'flex', height: '100%' }}>
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
                                  Ver +
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
                alignItems="center"
                mt={2}
              >
                <Grid item xs={2}>
                  <Link className={styles.link} to="#">
                    <Typography align="right" variant="body2">
                      Primeira página
                    </Typography>
                  </Link>
                </Grid>
                <Grid item xs={4}>
                  <Pagination
                    count={10}
                    variant="outlined"
                    shape="rounded"
                    hideNextButton={true}
                    hidePrevButton={true}
                  />
                </Grid>
                <Grid item xs={2}>
                  <Link className={styles.link} to="#">
                    <Typography align="left" variant="body2">
                      Última página
                    </Typography>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
      </WrapperPage>
  )
}