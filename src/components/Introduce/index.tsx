import { Avatar, Container, Stack, Typography } from "@mui/material";
import { resume } from "../../data";
import ButtonComponent from "../Button";
import TypographyComponent from "../TypographyComponent";

const Introduce = () => {
  return (
    <Container sx={{ my: 3 }} id="introduce">
      <Stack
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
          <TypographyComponent variant="h4">
            Hello, I'm Anh khoa
          </TypographyComponent>

          <Typography variant="h5" fontWeight={600}>
            Frontend Developer
          </Typography>

          <Typography variant="body1">
            Focused on building clean, user-centered web applications.
          </Typography>
          <ButtonComponent
            component="a"
            href={resume.href}
            {...{ download: resume.download }}
          >
            Download CV
          </ButtonComponent>
        </Stack>
      </Stack>
    </Container>
  );
};
export default Introduce;
