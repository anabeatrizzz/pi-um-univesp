import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Map from '../../components/map';
import useStyles, { modal } from './Donation.css'
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '../../components/button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import WrapperPage from '../../components/wrapper-page';

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

  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
      <WrapperPage>
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
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="flex-start"
                >
                  <Grid mr={5} pt={3} xs={12}>
                    <Button
                      onClick={handleOpenModal}
                      text='QUERO SABER MAIS!'
                    />
                  </Grid>
                  <Modal
                    disablePortal
                    open={openModal}
                    disableAutoFocus
                  >
                    <Box sx={modal}>
                      <Grid container
                        direction="column"
                        justifyContent="center"
                        alignItems="flex-end"
                      >
                        <Grid item xs={12}>
                          <CloseIcon
                            style={{ cursor: 'pointer' }}
                            onClick={handleCloseModal}
                          />
                        </Grid>
                      </Grid>
                      <Typography
                        variant="h6"
                        gutterBottom
                      >
                        Telefone:
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                      >
                        (13) 98765-4321
                      </Typography>
                      <br />
                      <Typography
                        variant="h6"
                        gutterBottom
                      >
                        Com quem falar:
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                      >
                        Maria Edileuza
                      </Typography>
                      <br />
                      <Typography
                        variant="h6"
                        gutterBottom
                      >
                        Código da doação:
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                      >
                        3334-telhas
                      </Typography>
                      <br />
                      <Button href="mailto:email@email.com" text="Enviar e-mail" />
                    </Box>
                  </Modal>
                </Grid>
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
              {/* <Grid
                container
                direction="column"
                justifyContent="flex-end"
                alignItems="flex-end"
              >
                <Grid mr={5} pt={2} xs={12}>
                  <Button text='QUERO SABER MAIS!' />
                </Grid>
              </Grid> */}
            </Grid>
          </Grid>
      </WrapperPage>
  )
}