import { Container, Grid } from "@mui/material";
import CardProject from "./CardProject";
import { projects } from "../../data";
import HeadingSection from "../HeadingSection";
import { motion } from "framer-motion";
export const Projects = () => {
  return (
    <Container id="projects" sx={{ my: 8, overflow: "hidden" }}>
      <HeadingSection
        className="
          relative
          w-fit

          after:content-['']
          after:absolute
          after:left-[105%]
          after:top-1/2
          after:-translate-y-1/2
          after:h-[4px]
          after:w-screen
          after:bg-[image:var(--gradient)]
        "
      >
        Here are a few of my favorite projects.
      </HeadingSection>
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
