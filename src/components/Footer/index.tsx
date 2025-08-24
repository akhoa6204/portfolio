import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box, Container, IconButton, Stack, Typography } from "@mui/material";

const socialInfo = [
  {
    label: "facebook",
    component: <FacebookIcon />,
    link: "https://www.facebook.com/4nhkh04/",
    color: "#1877F2",
    iconColor: "#fff",
  },
  {
    label: "github",
    component: <GitHubIcon />,
    link: "https://github.com/akhoa6204",
    color: "#333",
    iconColor: "#fff",
  },
  {
    label: "instagram",
    component: <InstagramIcon />,
    link: "https://www.instagram.com/akhoa_/",
    color: "#E4405F",
    iconColor: "#fff",
  },
];

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
        Always open to new opportunities
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
