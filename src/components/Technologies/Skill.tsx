import { Box, Stack, Typography } from "@mui/material";
import type { ISkill } from "../../data/types";
import { motion } from "framer-motion";

const Skill = ({ name, level, percent }: ISkill) => {
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" mb={0.5}>
        <Typography fontWeight={700}>{name}</Typography>
        <Typography variant="body2" sx={{ opacity: 0.7 }}>
          {level}
        </Typography>
      </Stack>

      {/* background track */}
      <Box
        sx={{
          height: 10,
          borderRadius: 2,
          overflow: "hidden",
          background: "#1e293b",
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          viewport={{ once: true, amount: 0.3 }} 
          transition={{ duration: 1, ease: "easeOut" }}
          style={{
            height: "100%",
            borderRadius: 2,
            background: "var(--gradient)",
          }}
        />
      </Box>
    </Box>
  );
};

export default Skill;
