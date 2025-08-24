import { Avatar, Button, Container, Stack, Typography } from "@mui/material";
import { IcAvatar } from "../../assets/images";

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
          src={IcAvatar}
          sx={{
            width: { xs: 150, sm: 180, lg: 200 },
            height: { xs: 150, sm: 180, lg: 200 },
          }}
        />
        <Stack spacing={1}>
          <Typography
            variant="h4"
            fontWeight={700}
            sx={{
              background: "var(--gradient)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
            }}
          >
            Hello, I'm Anh khoa
          </Typography>

          <Typography variant="h5" fontWeight={600}>
            Frontend Developer
          </Typography>

          <Typography variant="body1">
            Focused on building clean, user-centered web applications.
          </Typography>
          <Button
            component="a"
            href={"/AnhKhoa_CV.pdf"}
            download={"AnhKhoa_CV.pdf"}
            sx={{
              background: "var(--gradient)",
              width: "fit-content",
              color: "white",
              px: 3,
              py: 1,
              "&:hover": {
                opacity: 0.8,
              },
            }}
          >
            Download CV
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};
export default Introduce;
