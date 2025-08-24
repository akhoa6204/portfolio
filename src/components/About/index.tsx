import { Grid, Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";

const timeLines = [
  {
    year: "2026",
    descriptions: [
      " • Bachelor at DaNang University of Economics.",
      " • Graduated with major in Management Information Systems.",
      " • GPA 3.2/4.0",
    ],
  },
  {
    year: "5/2025",
    descriptions: [
      " • Became Frontend Developer Intern at XinkGroup.",
      " • Worked with React, MUI and TypeScript.",
    ],
  },
];

const AboutMe = () => {
  return (
    <Container sx={{ my: 3 }} id="about">
      <Typography variant="h5" fontWeight={700} sx={{ mb: 3 }}>
        About me
      </Typography>

      <Stack spacing={3} sx={{ position: "relative" }}>
        {timeLines.map((item, idx) => (
          <Grid
            key={item.year + idx}
            container
            columnSpacing={2}
            alignItems="stretch"
          >
            <Grid size={2}>
              <Typography
                variant="subtitle1"
                fontWeight={800}
                sx={{ opacity: 0.9, textAlign: "right" }}
              >
                {item.year}
              </Typography>
            </Grid>

            <Grid size={1} sx={{ position: "relative" }}>
              <Box sx={{ position: "relative", height: "100%" }}>
                <Box
                  sx={{
                    position: "absolute",
                    left: "50%",
                    top: 4,
                    bottom: idx === timeLines.length - 1 ? "auto" : -28,
                    width: 2,
                    bgcolor: "rgba(255,255,255,0.22)",
                    transform: "translateX(-50%)",
                    zIndex: 0,
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    left: "50%",
                    top: 4,
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    background: "var(--gradient)",
                    border: "3px solid #0f1420",
                    boxShadow: "0 0 0 2px rgba(139,92,246,0.35)",
                    transform: "translateX(-50%)",
                    zIndex: 1,
                  }}
                />
              </Box>
            </Grid>
            <Grid size={9}>
              {item.descriptions.map((description) => (
                <Typography
                  variant="body1"
                  sx={{
                    lineHeight: 1.5,
                    opacity: 0.9,
                    whiteSpace: "normal",
                    wordBreak: "break-word",
                  }}
                >
                  {description}
                </Typography>
              ))}
            </Grid>
          </Grid>
        ))}
      </Stack>
    </Container>
  );
};
export default AboutMe;
