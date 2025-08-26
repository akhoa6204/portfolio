import { Box, Container, Stack } from "@mui/material";
import { socials } from "../../data";
import SocialIcon from "../SocialIcon";
import TypographyComponent from "../TypographyComponent";

const Footer = () => {
  return (
    <Container sx={{ py: 2 }}>
      <Stack alignItems={"center"} mb={1}>
        <TypographyComponent textTransform={"uppercase"}>
          Open to opportunities, ready for the next step.
        </TypographyComponent>
      </Stack>
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
