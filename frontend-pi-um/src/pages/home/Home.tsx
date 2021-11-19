import React from 'react';
import Card from '@mui/material/Card';
import useStyles, { card, box, cardContent, forWhoCardContent } from './Home.css'
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '../../components/button';
import Img1 from '../../assets/img1.png';
import Img2 from '../../assets/img2.png';
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Map from '../../components/map'
import WrapperPage from '../../components/wrapper-page';

export default function Home() {
  const styles = useStyles();
  const settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4
  };

  return (
    <WrapperPage>
        <Grid spacing={2} container>
          <Grid item xs={6}>
            <Card sx={card}>
              <CardMedia
                component="img"
                src={Img1}
              />
              <Box sx={box}>
                <CardContent sx={cardContent}>
                  <Typography
                    variant="h6"
                    gutterBottom
                  >
                    <b>O que esperar</b>
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    gutterBottom
                  >
                    Aqui falaremos sobre o propósito do site, em que ele deve impactar e como as pessoas podem se sentir ao utilizar. Tanto quem doa, quanto quem recebe.
                  </Typography>

                  <Button text="SAIBA MAIS" />
                </CardContent>
              </Box>
            </Card>
          </Grid>

          <Grid item xs={6}>
            <Card sx={card}>
              <CardMedia
                component="img"
                //sx={{ width: 100, height: 100 }}
                src={Img2}
              />
              <Box sx={box}>
                <CardContent sx={forWhoCardContent}>
                  <Typography
                    gutterBottom
                    component="div"
                    variant="h6"
                  >
                    <b>Para quem</b>
                  </Typography>

                  <Typography
                    gutterBottom
                    component="div"
                    variant="subtitle1"
                  >
                    Aqui falaremos sobre quem pode se beneficiar, quem pode doar, etc.
                  </Typography>

                  <Button text="SAIBA MAIS" />
                </CardContent>
              </Box>
            </Card>
          </Grid>


        </Grid>

        <Grid className={styles.lastDonationsTxt} item xs={12}>
          <p><b>Últimas doações cadastradas</b></p>
        </Grid>

        <Slider {...settings}>
          {
            Array(10).fill(1).map((_, index) => {
              return (
                <Grid key={index} item xs={11}>
                  <Card className={styles.carouselCard}>
                    <CardMedia
                      component="img"
                      height="140"
                      src="https://place-hold.it/500x500.png"
                    />
                    <CardContent>
                      <Typography
                        align="center"
                        className={styles.typography2ndGrid}
                        component="div"
                        variant="subtitle1"
                      >
                        2 sacos de cimento
                      </Typography>

                      <Typography
                        align="center"
                        className={styles.typography2ndGrid}
                        component="div"
                        variant="subtitle1"
                      >
                        Bairro: Savoy
                      </Typography>

                      <Typography
                        align="center"
                        className={styles.typography2ndGrid}
                        component="div"
                        variant="subtitle1"
                      >
                        Adicionado há 1 dia
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              )
            })
          }
        </Slider>

        <Grid className={styles.lastDonationsTxt} item xs={12}>
          <p><b>Últimas doações cadastradas</b></p>
        </Grid>

        <Map />
    </WrapperPage>
  )
}