import { Container, Grid, Typography } from "@mui/material";
import { IcPortfolio, IcSmartBuy } from "../../assets/images";
import CardProject from "./CardProject";

const projects = [
  {
    id: "smartbuy",
    name: "SmartBuy E-commerce Platform",
    description:
      "A web-based e-commerce project including both client-side for shopping and an admin dashboard to manage products, categories, and orders.",
    github: "",
    web: "#",
    image: IcSmartBuy,
  },
  {
    id: "portfolio",
    name: "Landing page for front-end developer",
    description:
      "Responsive HTML/CSS layout for landing page for front-end developer.",
    github: "",
    web: "#",
    image: IcPortfolio,
  },
];

export const Projects = () => {
  return (
    <Container id="projects" sx={{ my: 3 }}>
      <Typography variant="h5" fontWeight={700} sx={{ mb: 3 }}>
        Projects
      </Typography>
      <Grid container spacing={2}>
        {projects.map((project) => (
          <Grid size={{ xs: 12, md: 4 }}>
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
