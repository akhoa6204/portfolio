import {
  AppBar,
  Button,
  Container,
  Slide,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import { navLinks, socials } from "../../data";
import SocialIcon from "../SocialIcon";
interface Props {
  window?: () => Window;
  children: React.ReactElement;
}
const HideOnScroll = (props: Props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};
const Header = () => {
  return (
    <HideOnScroll>
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
                      background: "var(--gradient)",
                      color: "white",
                      fontSize: 14,
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
                    sx={{
                      position: "relative",
                      color: "white",
                      fontSize: { xs: 14, sm: 16 },
                      "&::after": {
                        position: "absolute",
                        content: '""',
                        left: 0,
                        right: 0,
                        bottom: 0,
                        height: "3px",
                        width: "100%",
                        borderRadius: 1,
                        background: "var(--gradient)",
                        transform: "scaleX(0)",
                        transformOrigin: "right",
                        transition: "transform 0.3s ease-in-out",
                      },
                      "&:hover::after": {
                        transform: "scaleX(1)",
                        transformOrigin: "left",
                      },
                    }}
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
    </HideOnScroll>
  );
};

export default Header;
