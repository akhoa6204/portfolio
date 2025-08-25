import { Box, Container, Stack, Typography } from "@mui/material";
import { socials } from "../../data";
import SocialIcon from "../SocialIcon";

const Footer = () => {
  return (
    <Container sx={{ py: 2 }}>
      <Typography
        sx={{
          textTransform: "uppercase",
          textAlign: "center",
          fontSize: { xs: 14, md: 16 },
          background: "var(--gradient)",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          mb: 1,
        }}
      >
        Open to opportunities, ready for the next step.
      </Typography>
      <Stack
        direction="row"
        alignItems="center"
        spacing={2}
        sx={{ justifyContent: "center" }}
      >
        <Box sx={{ flex: 1, height: 2, bgcolor: "white", opacity: 0.5 }} />

        <Stack direction="row" spacing={2}>
          {socials.map((item) => (
            <SocialIcon {...item} />
          ))}
        </Stack>

        <Box sx={{ flex: 1, height: 2, bgcolor: "white", opacity: 0.5 }} />
      </Stack>
    </Container>
  );
};
export default Footer;
