import React from 'react'
import TextField from '../../components/textfield'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import WrapperPage from '../../components/wrapper-page'
import Button from '../../components/button'

export default function UpdateData(){
  return(
    <WrapperPage>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="body1">
            Atualize aqui os seus dados cadastrais
          </Typography>
        </Grid>
        <form>
          <Grid container spacing={4}>
            <Grid item xs={7}>
              <TextField
                label="Nome completo"
                variant="outlined"
                value="Maria Cecília da Silva"
                placeholder="Nome completo"
                type="text"
                fullWidth
                required
                
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                label="CPF"
                variant="outlined"
                placeholder="CPF"
                value="423.338.881-29"
                type="text"
                fullWidth
                required
                
                inputProps={{
                  maxlength: 11
                }}
              />
            </Grid>
            <Grid item xs={7}>
              <TextField
                label="Endereço (Rua / Av / Travessa)"
                variant="outlined"
                value="Avenida das Flores"
                placeholder="Endereço (Rua / Av / Travessa)"
                type="text"
                fullWidth
                required
                
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                label="Número"
                variant="outlined"
                placeholder="Número"
                type="number"
                value={755}
                fullWidth
                required
                
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Complemento"
                variant="outlined"
                placeholder="Complemento"
                value="Fundos"
                type="text"
                fullWidth
                inputProps={{ maxlength: 20 }}
                
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Bairro"
                variant="outlined"
                placeholder="Bairro"
                type="text"
                value="Savoy"
                fullWidth
                required
                inputProps={{ maxlength: 20 }}
                
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Cidade"
                variant="outlined"
                placeholder="Cidade"
                value="Itanhaém"
                type="text"
                fullWidth
                required
                inputProps={{ maxlength: 30 }}
                
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="CEP"
                variant="outlined"
                placeholder="CEP"
                type="text"
                value="11740-000"
                fullWidth
                required
                inputProps={{ maxlength: 8 }}
                
              />
            </Grid>
            <Grid
              mr={5}
              container
              direction="row"
              justifyContent="flex-end"
              alignContent="flex-end"
            >
              <Grid item xs={1}>
                <Button type="submit" text="Salvar" />
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </WrapperPage>
  )
}