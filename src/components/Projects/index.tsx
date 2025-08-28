import { Container, Grid } from "@mui/material";
import CardProject from "./CardProject";
import { projects } from "../../data";
import HeadingSection from "../HeadingSection";
import { motion } from "framer-motion";
export const Projects = () => {
  return (
    <Container id="projects" sx={{ my: 3 }}>
      <HeadingSection>Projects</HeadingSection>
      <Grid container spacing={2}>
        {projects.map((project) => (
          <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
            <motion.div
              initial={{ translateY: "-20px", opacity: 0 }}
              whileInView={{ translateY: "0", opacity: 1 }}
              viewport={{
                once: true, 
              }}
              transition={{ duration: 1 }}
            >
              <CardProject key={project.id} {...project} />
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
export default Projects;
