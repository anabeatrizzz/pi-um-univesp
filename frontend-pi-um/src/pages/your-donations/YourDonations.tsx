import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import TextField from '../../components/textfield';
import { Link } from 'react-router-dom';
import Button from '../../components/button';
import useStyles, { card } from './YourDonations.css';
import WrapperPage from '../../components/wrapper-page';
import { useFormik } from 'formik'
import { CardMedia, Box, CardContent } from '@mui/material';
import { style } from '@mui/system';
import { Style } from '@mui/icons-material';

  export default function YourDonations () {
    const styles = useStyles();
  
    return (
      <WrapperPage>
        <Grid container>
          <Grid ml={20} item xs={12}>
            <Typography fontSize={24} variant="body1">
              Maria - Doações cadastradas
            </Typography>
          </Grid>
        </Grid>
        {
                    Array(4).fill(1).map((_, index) => {
                      const linkTo = `/donation/${index+1}`
                      return (
                      
                      
                      <Grid item xs={6}>
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
                  <Grid
                      container
                      direction="column"
                      justifyContent="center"
                      alignItems="stretch"
                  >
                   <Grid item xs={12}>
                  <Button text="Nova Doação" />
                  </Grid>
                  </Grid>
                    
      </WrapperPage>
      
    )
  }
 