import { Box, Container, Stack } from "@mui/material";
import { resume } from "../../data";
import AvatarCircle from "./AvatarCircle";
import Info from "./Info";
import { motion } from "framer-motion";

const Introduce = () => {
  return (
    <Container sx={{ mt: 3, mb: { xs: 6, md: 3 } }} id="introduce">
      <Stack
        direction={{ xs: "column", sm: "row" }}
        sx={{ position: "relative" }}
      >
        <motion.div
          style={{ flex: 1 }}
          initial={{ translateX: "-100%" }}
          animate={{ translateX: "0" }}
          transition={{ duration: 0.7 }}
        >
          <Info resume={resume} />
        </motion.div>
        <motion.div
          initial={{ translateX: "100%" }}
          animate={{ translateX: "0" }}
          transition={{ duration: 0.7 }}
        >
          <Box
            sx={{
              transform: {
                xs: "translate(-300px, 50px)",
                sm: "translate(-125px, 20px)",
              },
            }}
          >
            <AvatarCircle avatar={resume.avatar} />
          </Box>
        </motion.div>
      </Stack>
    </Container>
  );
};
export default Introduce;
