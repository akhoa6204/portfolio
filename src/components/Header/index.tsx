import {
  AppBar,
  Button,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

const socialInfo = [
  {
    label: "facebook",
    component: <FacebookIcon />,
    link: "https://www.facebook.com/4nhkh04/",
    color: "#1877F2",
  },
  {
    label: "github",
    component: <GitHubIcon />,
    link: "https://github.com/akhoa6204",
    color: "#333",
  },
  {
    label: "instagram",
    component: <InstagramIcon />,
    link: "https://www.instagram.com/akhoa_/",
    color: "#E4405F",
  },
];

const navLinks = [
  { label: "About", path: "about" },
  { label: "Technologies", path: "technologies" },
  { label: "Projects", path: "projects" },
  { label: "contact", path: "contact" },
];

const Header = () => {
  return (
    <AppBar
      position="sticky"
      elevation={1}
      sx={{ bgcolor: "#0f172a", zIndex: 999 }}
    >
      <Toolbar disableGutters>
        <Container>
          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
            gap={1}
          >
            <Tooltip
              title={`"I.M. portfolio" means Anh Khoa Portfolio`}
              arrow
              placement="bottom"
              slotProps={{
                tooltip: {
                  sx: {
                    bgcolor: "#8b5cf6",
                    color: "white",
                    fontSize: "0.9rem",
                    borderRadius: "12px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                    px: 2,
                    py: 1,
                  },
                },
                arrow: { sx: { color: "#8b5cf6" } },
              }}
            >
              <Typography
                component="a"
                href="#introduce"
                sx={{
                  fontSize: { xs: 20, md: 24 },
                  cursor: "pointer",
                  p: 0,
                  color: "white",
                  textDecoration: "none",
                }}
              >
                I.M. portfolio
              </Typography>
            </Tooltip>

            <Stack
              direction="row"
              sx={{
                order: { xs: 2, md: 1 },
                justifyContent: "center",
              }}
              spacing={1}
              flex={1}
            >
              {navLinks.map((item) => (
                <Button
                  key={item.label}
                  sx={{ color: "white", fontSize: { xs: 14, sm: 16 } }}
                  href={`#${item.path}`}
                  component="a"
                >
                  {item.label}
                </Button>
              ))}
            </Stack>

            <Stack
              direction="row"
              spacing={1}
              sx={{
                order: { xs: 1, sm: 2 },
                display: { xs: "flex", sm: "none", md: "flex" },
              }}
            >
              {socialInfo.map((item) => (
                <Tooltip
                  title={item.label}
                  arrow
                  placement="bottom"
                  key={item.label}
                >
                  <IconButton
                    aria-label={`Open ${item.label}`}
                    component="a"
                    href={item.link}
                    target="_blank"
                    sx={{
                      backgroundColor: item.color,
                      color: "#fff",
                      width: 40,
                      height: 40,
                      "& .MuiSvgIcon-root": {
                        fontSize: 24,
                      },
                      "&:hover": {
                        opacity: 0.9,
                      },
                    }}
                  >
                    {item.component}
                  </IconButton>
                </Tooltip>
              ))}
            </Stack>
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
