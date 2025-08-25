import { Typography } from "@mui/material";

interface IHeadingSection {
  children: React.ReactNode;
}
const HeadingSection = ({ children }: IHeadingSection) => {
  return (
    <Typography variant="h5" fontWeight={700} sx={{ mb: 3 }}>
      {children}
    </Typography>
  );
};
export default HeadingSection;
