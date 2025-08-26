import { Box, Container, Stack, Typography } from "@mui/material";
import { resume } from "../../data";
import ButtonComponent from "../Button";
import TypographyComponent from "../TypographyComponent";
import AvatarCircle from "./AvatarCircle";

const Introduce = () => {
  return (
    <Container sx={{ mt: 3, mb: { xs: 6, md: 3 } }} id="introduce">
      <Stack
        direction={{ xs: "column", md: "row" }}
        sx={{ position: "relative" }}
      >
        <Box flex={1}>
          <Box sx={{ zIndex: 2, position: { md: "absolute" } }}>
            <TypographyComponent>
              <Typography
                sx={{
                  fontSize: { xs: 32, md: 48, lg: 64 },
                  fontWeight: 600,
                }}
              >
                Hello, I'm Anh Khoa
              </Typography>
            </TypographyComponent>

            <Typography
              sx={{
                fontSize: { xs: 24, sm: 28, md: 44 },
                fontWeight: 600,
                mb: 3,
              }}
            >
              Frontend Developer
            </Typography>

            <Typography
              variant="body1"
              sx={{ mb: 6, fontSize: 18, maxWidth: 500 }}
            >
              Frontend Developer passionate about crafting clean, responsive,
              and user-focused web applications.
            </Typography>

            <ButtonComponent
              component="a"
              href={resume.href}
              {...{ download: resume.download }}
            >
              Download CV
            </ButtonComponent>
          </Box>
        </Box>
        <Box
          sx={{
            transform: {
              xs: "translate(-300px, 50px)",
              md: "translate(-125px, 20px)",
            },
          }}
        >
          <AvatarCircle avatar={resume.avatar} />
        </Box>
      </Stack>
    </Container>
  );

  {
    /* <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Avatar
          src={resume.avatar}
          sx={{
            width: { xs: 150, sm: 180, lg: 200 },
            height: { xs: 150, sm: 180, lg: 200 },
          }}
        />
        <Stack spacing={1}>
          <TypographyComponent>
            <Typography
              sx={{ fontSize: { xs: 24, md: 36, lg: 48 }, fontWeight: 600 }}
            >
              Hello, I'm Anh Khoa
            </Typography>
          </TypographyComponent>

          <Typography variant="h5" fontWeight={600}>
            Frontend Developer
          </Typography>

          <Typography variant="body1">
            Frontend Developer passionate about crafting clean, responsive, and
            user-focused web applications.
          </Typography>
          <ButtonComponent
            component="a"
            href={resume.href}
            {...{ download: resume.download }}
          >
            Download CV
          </ButtonComponent>
        </Stack>
      </Stack> */
  }
};
export default Introduce;
