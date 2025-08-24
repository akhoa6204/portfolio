import {
  Box,
  Container,
  Grid,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
const skills = [
  { id: "htmlcss", name: "HTML/CSS", level: "Intermediate", percent: 70 },
  { id: "ts", name: "TypeScript", level: "Intermediate", percent: 65 },
  { id: "react", name: "React.js", level: "Beginner", percent: 60 },
  { id: "tailwind", name: "Tailwind CSS", level: "Beginner", percent: 55 },
  { id: "mui", name: "MUI", level: "Beginner", percent: 50 },
];

const additionalSkills = [
  // Backend & Database
  { id: "django", name: "Django" },
  { id: "python", name: "Python" },
  { id: "java", name: "Java" },
  { id: "sqlserver", name: "SQL Server" },
  { id: "sqlite", name: "SQLite" },

  // Tools & Platforms
  { id: "git", name: "Git/GitHub" },
  { id: "postman", name: "Postman" },
  { id: "vscode", name: "VSCode" },

  // Others
  { id: "restapi", name: "RESTful API Design" },
  { id: "oop", name: "OOP" },
  { id: "ml", name: "Machine Learning" },
  { id: "crawling", name: "Web Crawling" },
  { id: "testauto", name: "Test Automation" },
];

const Technologies = () => {
  return (
    <Container sx={{ my: 3 }} id="technologies">
      <Typography variant="h5" fontWeight={700} sx={{ mb: 3 }}>
        Technologies
      </Typography>
      <Stack spacing={2} sx={{ mb: 3 }}>
        {skills.map((s) => (
          <Box key={s.id}>
            <Stack direction="row" justifyContent="space-between" mb={0.5}>
              <Typography fontWeight={700}>{s.name}</Typography>
              <Typography variant="body2" sx={{ opacity: 0.7 }}>
                {s.level}
              </Typography>
            </Stack>
            <LinearProgress
              variant="determinate"
              value={s.percent}
              sx={{
                "& .MuiLinearProgress-bar": {
                  background: "var(--gradient)",
                },
                height: 10,
                borderRadius: 2,
              }}
            />
          </Box>
        ))}
      </Stack>
      <Typography variant="h5" fontWeight={700} sx={{ mb: 3 }}>
        Additional technologies and skills
      </Typography>
      <Grid container spacing={2}>
        {additionalSkills.map((s) => (
          <Grid key={s.id} size={{ xs: 6, sm: 4, lg: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box
                sx={{
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  background: "var(--gradient)",
                  border: "3px solid #0f1420",
                  boxShadow: "0 0 0 2px rgba(139,92,246,0.35)",
                }}
              />
              <Typography variant="body2">{s.name}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
export default Technologies;
