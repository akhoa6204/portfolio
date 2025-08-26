import { Button } from "@mui/material";
import type { ButtonProps } from "@mui/material/Button";

interface IButtonComponent {
  children: React.ReactNode;
}

const ButtonComponent = ({
  children,
  ...rest
}: IButtonComponent & ButtonProps) => {
  return (
    <Button
      variant="contained"
      sx={{
        textTransform: "none",
        borderRadius: 2,
        px: 1,
        py: 1.5,
        background: "var(--gradient)",
        boxShadow: "0px 10px 30px rgba(0, 178, 255, 0.35)",
        transition: "all 0.3s ease",
        "&:hover": {
          background: "var(--hover-gradient)",
          boxShadow: "0px 10px 30px rgba(0, 178, 255, 0.5))",
        },
        color: "white",
        width: "fit-content",
        minWidth: 150,
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};
export default ButtonComponent;
