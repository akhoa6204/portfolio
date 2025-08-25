import {
  AppBar,
  Button,
  Container,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { navLinks, socials } from "../../data";
import SocialIcon from "../SocialIcon";

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
              {socials.map((item) => (
                <SocialIcon {...item} key={item.id} />
              ))}
            </Stack>
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
