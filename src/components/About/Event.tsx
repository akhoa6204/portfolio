import { Box, Grid, Typography } from "@mui/material";
import type { ITimeLine } from "../../data/types";

const Event = ({ item, isLast }: { item: ITimeLine; isLast: boolean }) => {
  return (
    <Grid container columnSpacing={2} alignItems="stretch">
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
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            top: 4,
            bottom: isLast ? "auto" : -28,
            width: 2,
            bgcolor: "white",
            opacity: 0.5,
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
  );
};
export default Event;
