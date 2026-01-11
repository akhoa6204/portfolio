import { Container, Grid, Typography } from "@mui/material";
import HeadingSection from "../HeadingSection";
import { IcOdoo } from "../../assets/images";

const logos = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    alt: "HTML5",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    alt: "CSS3",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    alt: "JavaScript",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    alt: "TypeScript",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    alt: "React",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    alt: "TailwindCSS",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
    alt: "SASS",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
    alt: "Node.js",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
    alt: "Django",
  },
  {
    src: IcOdoo,
    alt: "Odoo",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    alt: "Python",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    alt: "PostgreSQL",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    alt: "MySQL",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg",
    alt: "SQLServer",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    alt: "Git",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    alt: "Postman",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg",
    alt: "Selenium",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    alt: "Figma",
  },
];
const Technologies = () => {
  return (
    <Container sx={{ my: 8 }} id="technologies">
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <HeadingSection className="text-center md:text-left">
            I got the experience.
            <br />
            Here is my toolbelt for success.
          </HeadingSection>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} spacing={2}>
          <Grid container spacing={3}>
            {logos.map((logo, index) => (
              <Grid size={{ xs: 4, sm: 3, md: 2 }} key={index}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  style={{
                    width: "48px",
                    height: "48px",
                    objectFit: "contain",
                    display: "block",
                    margin: "0 auto",
                  }}
                />
                <Typography
                  variant="caption"
                  display="block"
                  textAlign="center"
                  mt={2}
                  fontWeight={700}
                  sx={{ opacity: 0.8 }}
                  color="gray"
                >
                  {logo.alt}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Technologies;
