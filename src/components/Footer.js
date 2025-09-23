import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => (
  <Box component="footer" sx={{ p: 2, textAlign: "center", bgcolor: "#1976d2", color: "#fff" }}>
    <Typography variant="body2">&copy; {new Date().getFullYear()} DyL360 - Todos los derechos reservados</Typography>
  </Box>
);

export default Footer;
