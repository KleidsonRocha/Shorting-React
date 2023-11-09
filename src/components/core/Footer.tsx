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
      <Container maxWidth="lg" >
        <Grid container spacing={13} padding={2}>
          <Grid item xs={5} sm={8} >
            <Typography variant="h6" color="text.primary" fontWeight={900} paddingBottom={1}>
              Sobre Nós
            </Typography>
            <Typography  variant="body2" color="dark" justifyContent={"center"}>
            Nossa equipe é composta por três membros, cada um desempenhando um papel específico na criação desta ferramenta de demonstração de algoritmos de ordenação. 
            Utilizamos uma variedade de ferramentas, incluindo React, Git e outras, para desenvolver e aprimorar o projeto.
            </Typography>
          </Grid>
          <Grid item xs={0} sm={0}>
            <Typography variant="h6" color="text.primary" fontWeight={900} paddingBottom={1}>
              Contatos
            </Typography>
            <Typography variant="body2">
              Email: kleidsonmr@gmail.com
            </Typography>
            <Typography variant="body2">
              Phone: +54 99936-2429
            </Typography>
            <Typography variant="body2">
              Linkedin: kleidsonmr
            </Typography>
          </Grid>

        </Grid>
        <Box mt={2}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
             Kleidson-Mr

          </Typography>
        </Box>
      </Container>
    </Box>
  )
}