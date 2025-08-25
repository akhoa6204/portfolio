import { Box, LinearProgress, Stack, Typography } from "@mui/material";
import type { ISkill } from "../../data/types";

const Skill = ({ name, level, percent }: ISkill) => {
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" mb={0.5}>
        <Typography fontWeight={700}>{name}</Typography>
        <Typography variant="body2" sx={{ opacity: 0.7 }}>
          {level}
        </Typography>
      </Stack>
      <LinearProgress
        variant="determinate"
        value={percent}
        sx={{
          "& .MuiLinearProgress-bar": {
            background: "var(--gradient)",
          },
          height: 10,
          borderRadius: 2,
        }}
      />
    </Box>
  );
};
export default Skill;
