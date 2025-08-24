import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box, Container, IconButton, Stack, Typography } from "@mui/material";

const socialInfo = [
  {
    label: "facebook",
    component: (
      <FacebookIcon
        sx={{
          width: { xs: 28, md: 36 },
          height: { xs: 28, md: 36 },
          color: "#1877F2",
        }}
      />
    ),
    link: "https://www.facebook.com/4nhkh04/",
    color: "#1877F2",
  },
  {
    label: "github",
    component: (
      <GitHubIcon
        sx={{ width: { xs: 28, md: 36 }, height: { xs: 28, md: 36 } }}
      />
    ),
    link: "https://github.com/akhoa6204",
  },
  {
    label: "instagram",
    component: (
      <InstagramIcon
        sx={{
          width: { xs: 28, md: 36 },
          height: { xs: 28, md: 36 },
          color: "#E4405F",
        }}
      />
    ),
    link: "https://www.instagram.com/akhoa_/",
  },
];
const Footer = () => {
  return (
    <Container sx={{ py: 2 }}>
      <Typography
        sx={{
          textTransform: "uppercase",
          textAlign: "center",
          fontSize: { xs: 20, md: 24 },
          background: "var(--gradient)",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Thank u for watching
      </Typography>
      <Stack
        direction="row"
        alignItems="center"
        spacing={2}
        sx={{ justifyContent: "center" }}
      >
        <Box sx={{ flex: 1, height: 2, bgcolor: "white", opacity: 0.5 }} />

        <Stack direction="row" spacing={2}>
          {socialInfo.map((s) => (
            <IconButton
              key={s.label}
              sx={{ color: "white" }}
              aria-label={`Open ${s.label}`}
              component="a"
              href={s.link}
              target="_blank"
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
