import { Container, Grid } from "@mui/material";
import CardProject from "./CardProject";
import { projects } from "../../data";
import HeadingSection from "../HeadingSection";

export const Projects = () => {
  return (
    <Container id="projects" sx={{ my: 3 }}>
      <HeadingSection>Projects</HeadingSection>
      <Grid container spacing={2}>
        {projects.map((project) => (
          <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
            <CardProject key={project.id} {...project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
export default Projects;
