import React, { useState, ChangeEvent } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '../../components/textfield';
import WrapperPage from '../../components/wrapper-page';
import Button from '../../components/button';
import MenuItem from '@mui/material/MenuItem';
import Card from '@mui/material/Card';
import { colors } from '../../assets/variables';

export default function RegisterDonation(){
  const categories = ['Básico', 'Revestimento', 'Louças', 'Metais', 'Hidráulica', 'Elétrica', 'Pintura', 'Gesso', 'Vidro', 'Esquadrias', 'Portas e janelas']
  const [categorie, setCategorie] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCategorie(event.target.value);
  };

  return(
    <WrapperPage>
      <Grid container>
        <Grid item xs={12}>
          <Typography fontSize={24} variant="body1">
            Cadastre aqui a sua doação
          </Typography>
        </Grid>
      </Grid>
      <form>
        <Grid container spacing={4}>
          <Grid item xs={8}>
            <TextField
              fullWidth
              id="donationName"
              label="Digite aqui o nome do item que vai doar"
              type="text"
              mb={true}
              required
            />
            <TextField
              fullWidth
              id="responsable"
              label="Quem é o responsável pela doação?"
              type="text"
              mb={true}
              required
            />
            <TextField
              fullWidth
              id="telephone"
              label="Qual o telefone?"
              type="tel"
              mb={true}
              required
            />
            <Typography>
              Insira aqui a foto do que você está doando:
            </Typography>
            <TextField
              id="donationImg"
              fullWidth
              type="file"
              mb={true}
              required
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              select
              fullWidth
              value={categorie}
              onChange={handleChange}
              id="donationCategory"
              label="Qual a categoria da doação?"
              required
              mb={true}
            >
              {
                categories.map(categorie => (
                  <MenuItem key={categorie} value={categorie}>
                    { categorie }
                  </MenuItem>
                ))
              }
            </TextField>
            <Card sx={{ padding: 2 }}>
              <img
                width="100%"
                height="100%"
                src="https://place-hold.it/500x500.png"
                alt="imagem da doação"
              />
            </Card>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
          <Typography>
              Descreva aqui a doação:
            </Typography>
            <TextField
              fullWidth
              id="donationDescription"
              type="text"
              multiline
              minRows={10}
              mb={true}
              required
            />
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="flex-end"
          spacing={2}
        >
          <Grid item xs={3}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="stretch"
            >
              <Button
                bgColor={colors.lightGrey}
                text="cancelar"
              />
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="stretch"
            >
              <Button type="submit" text="enviar" />
            </Grid>
          </Grid>
        </Grid>
      </form>
    </WrapperPage>
  )
}