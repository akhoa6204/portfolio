import { Box, Typography } from "@mui/material";
import type { IAdditionalSkill } from "../../data/types";

const AdditionalSkill = ({ name }: IAdditionalSkill) => {
  return (
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
      <Typography variant="body2">{name}</Typography>
    </Box>
  );
};
export default AdditionalSkill;
