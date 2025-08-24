import { Box, CardMedia, Typography, Button, Stack } from "@mui/material";
interface IProps {
  name: string;
  description: string;
  image: string;
  github: string;
  web: string;
}
const CardProject = ({ name, description, image, github, web }: IProps) => {
  return (
    <Box
      sx={{
        borderRadius: 4,
        p: "2px",
        background: "var(--gradient)",
        transition: "transform .5s ease",
        "&:hover": {
          transform: "translateY(-5px)",
        },
      }}
    >
      <Box
        sx={{
          bgcolor: "#0f172a",
          borderRadius: 4,
          p: 2,
          color: "white",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <CardMedia
          component="img"
          image={image}
          alt={name}
          sx={{
            borderRadius: 2,
            width: "100%",
            height: 180,
            objectFit: "cover",
          }}
        />

        <Typography variant="h6" fontWeight={800}>
          {name}
        </Typography>
        <Typography variant="body2" sx={{ opacity: 0.85, lineHeight: 1.6 }}>
          {description}
        </Typography>

        <Stack direction="row" spacing={1.5} justifyContent={"center"}>
          <Button
            variant="contained"
            href={web}
            target="_blank"
            sx={{
              textTransform: "none",
              borderRadius: 999,
              px: 2.5,
              background: "var(--gradient)",
              "&:hover": {
                opacity: 0.85,
              },
              color: "white",
            }}
          >
            Live preview
          </Button>
          <Button
            variant="outlined"
            href={github}
            target="_blank"
            sx={{
              textTransform: "none",
              borderRadius: 999,
              px: 2.5,
              color: "white",
              borderColor: "rgba(255,255,255,.5)",
              "&:hover": { borderColor: "#8b5cf6" },
            }}
          >
            GitHub
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default CardProject;
