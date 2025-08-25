import { Container, Grid, Typography } from "@mui/material";
import CardProject from "./CardProject";
import { projects } from "../../data";

export const Projects = () => {
  return (
    <Container id="projects" sx={{ my: 3 }}>
      <Typography variant="h5" fontWeight={700} sx={{ mb: 3 }}>
        Projects
      </Typography>
      <Grid container spacing={2}>
        {projects.map((project) => (
          <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
            <CardProject
              key={project.id}
              name={project.name}
              image={project.image}
              description={project.description}
              web={project.web}
              github={project.github}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
export default Projects;
