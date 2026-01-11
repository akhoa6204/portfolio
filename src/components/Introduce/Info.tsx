import { Box, Typography } from "@mui/material";
import TypographyComponent from "../TypographyComponent";
import ButtonComponent from "../Button";
import type { IResume } from "../../data/types";

const Info = ({ resume }: { resume: IResume }) => {
  return (
    <>
      <Box sx={{ zIndex: 2, position: { sm: "absolute" } }}>
        <TypographyComponent>
          <Typography
            sx={{
              fontSize: { xs: 32, md: 48, lg: 64 },
              fontWeight: 600,
            }}
          >
            Hello, I'm Anh Khoa
          </Typography>
        </TypographyComponent>

        <Typography
          sx={{
            fontSize: { xs: 24, sm: 28, md: 44 },
            fontWeight: 600,
            mb: 3,
          }}
        >
          Frontend Developer
        </Typography>

        <Typography
          variant="body1"
          sx={{ mb: { xs: 3, sm: 6 }, fontSize: 18, maxWidth: 500 }}
        >
          Frontend Developer passionate about crafting clean, responsive, and
          user-focused web applications.
        </Typography>

        <ButtonComponent
          component="a"
          href={resume.href}
          {...{ download: resume.download }}
        >
          Check my CV
        </ButtonComponent>
      </Box>
    </>
  );
};
export default Info;
