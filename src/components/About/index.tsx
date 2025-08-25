import { Container, Stack } from "@mui/system";
import { timeLines } from "../../data";
import Event from "./Event";
import HeadingSection from "../HeadingSection";

const AboutMe = () => {
  return (
    <Container sx={{ my: 3 }} id="about">
      <HeadingSection>About me</HeadingSection>

      <Stack spacing={3} sx={{ position: "relative" }}>
        {timeLines.map((item, idx) => (
          <Event
            key={item.id}
            item={item}
            isLast={idx === timeLines.length - 1}
          />
        ))}
      </Stack>
    </Container>
  );
};
export default AboutMe;
