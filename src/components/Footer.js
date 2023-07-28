import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
import '../css/style.css';

export default function Footer() {
  return (
    <Box
      component="footer"
      maxHeight="5vh"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 2,
        background: "transparent",
        // flag: mess with this
        position: "sticky",
        bottom: 0,
        left: 0,
        right: 0,
        marginTop: "2rem",
      }}
    >
      <Container maxWidth="lg">
        <Box mt={3}>
          <Typography variant="body2" color="background.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="/">
              Dan McKay
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}