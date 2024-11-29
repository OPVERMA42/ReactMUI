import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        textAlign: "center",
        backgroundColor: "#f5f5f5",
        mt: "auto",
        borderTop: "1px solid #ddd",
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} My App. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
