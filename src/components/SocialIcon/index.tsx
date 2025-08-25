import { IconButton } from "@mui/material";
import type { ISocialInfo } from "../../data/types";

const SocialIcon = ({ label, link, color, component }: ISocialInfo) => {
  return (
    <IconButton
      key={label}
      aria-label={`Open ${label}`}
      component="a"
      href={link}
      target="_blank"
      sx={{
        backgroundColor: color,
        color: "#fff",
        width: 40,
        height: 40,
        "& .MuiSvgIcon-root": {
          fontSize: 24,
        },
        "&:hover": {
          opacity: 0.9,
        },
      }}
    >
      {component}
    </IconButton>
  );
};
export default SocialIcon;
