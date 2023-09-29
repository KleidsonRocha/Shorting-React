import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      padding={2}
      component="footer"
      sx={{
        backgroundColor: (theme) => theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={13} padding={2}>
          <Grid item xs={5} sm={8} >
            <Typography variant="h6" color="text.primary" gutterBottom>
              Sobre Nós
            </Typography>
            <Typography  variant="body2" color="dark" justifyContent={"center"}>
            sou um programador front-end apaixonado por React, especializado em criar experiências de usuário excepcionais. Minhas habilidades combinam a maestria técnica
            do React com uma profunda compreensão da estética do design. Através da aplicação de metodologias ágeis, garanto que cada projeto evolua de maneira eficiente,
            enquanto iterações frequentes e feedback constante moldam cada linha de código que escrevo.
            </Typography>
          </Grid>
          <Grid item xs={0} sm={0}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contatos
            </Typography>
            <Typography variant="body2" color="light">
              Email: kleidsonmr@gmail.com
            </Typography>
            <Typography variant="body2" color="light">
              Phone: +54 99936-2429
            </Typography>
            <Typography variant="body2" color="light">
              Linkedin: kleidsonmr
            </Typography>
          </Grid>
          
        </Grid>
        <Box mt={2}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
             Kleidson Matos da Rocha 

          </Typography>
        </Box>
      </Container>
    </Box>
  )
}