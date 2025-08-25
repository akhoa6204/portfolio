import { Container, Grid, Stack } from "@mui/material";
import { additionalSkills, skills } from "../../data";
import Skill from "./Skill";
import AdditionalSkill from "./AdditionalSkill";
import HeadingSection from "../HeadingSection";

const Technologies = () => {
  return (
    <Container sx={{ my: 3 }} id="technologies">
      <HeadingSection>Technologies</HeadingSection>
      <Stack spacing={2} sx={{ mb: 3 }}>
        {skills.map((s) => (
          <Skill key={s.id} {...s} />
        ))}
      </Stack>
      <HeadingSection>Additional technologies and skills</HeadingSection>
      <Grid container spacing={2}>
        {additionalSkills.map((s) => (
          <Grid size={{ xs: 6, sm: 4, lg: 3 }} key={s.id}>
            <AdditionalSkill key={s.id} {...s} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
export default Technologies;
