import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import { socials } from "../../data";

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
          {socials.map((s) => (
            <IconButton
              key={s.label}
              component="a"
              href={s.link}
              target="_blank"
              aria-label={`Open ${s.label}`}
              sx={{
                backgroundColor: s.color,
                color: s.iconColor,
                width: 40,
                height: 40,
                "& .MuiSvgIcon-root": {
                  fontSize: 28,
                },
                "&:hover": {
                  opacity: 0.9,
                },
              }}
            >
              {s.component}
            </IconButton>
          ))}
        </Stack>

        <Box sx={{ flex: 1, height: 2, bgcolor: "white", opacity: 0.5 }} />
      </Stack>
    </Container>
  );
};
export default Footer;
