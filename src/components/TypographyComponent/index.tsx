import { Typography } from "@mui/material";
import type { TypographyProps } from "@mui/material/Typography";

interface ITypographyComponent {
  children: React.ReactNode;
}
const TypographyComponent = ({
  children,
  ...rest
}: ITypographyComponent & TypographyProps) => {
  return (
    <Typography
      fontWeight={700}
      sx={{
        width: "fit-content",
        background: "var(--gradient)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
        WebkitTextFillColor: "transparent",
      }}
      {...rest}
    >
      {children}
    </Typography>
  );
};
export default TypographyComponent;
