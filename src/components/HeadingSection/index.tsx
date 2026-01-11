import { Typography } from "@mui/material";

interface IHeadingSection {
  children: React.ReactNode;
  className?: string;
}
const HeadingSection = ({ children, className }: IHeadingSection) => {
  return (
    <Typography variant="h5" fontWeight={700} sx={{ mb: 3 }} className={className}>
      {children}
    </Typography>
  );
};
export default HeadingSection;
