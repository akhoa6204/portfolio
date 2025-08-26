import { Avatar, Box, type BoxProps } from "@mui/material";

const AvatarCircle = ({ avatar, ...rest }: { avatar: string } & BoxProps) => {
  return (
    <Box sx={{ position: "relative", width: "fit-content" }} {...rest}>
      <Box
        sx={{
          width: { xs: 492, md: 532 },
          height: { xs: 492, md: 532 },
          background: "var(--gradient)",
          borderRadius: 999,
          p: 0.2,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            background: "#0f172a",
            width: "100%",
            height: "100%",
            borderRadius: 999,
          }}
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          width: { xs: 184, md: 164 },
          height: { xs: 184, md: 164 },
          borderRadius: 999,
          zIndex: 1,
          top:  { xs: 100, md: 186 },
          left: { xs: 463, md: 493 },
          background: "var(--gradient)",
          boxShadow: "0px 10px 30px rgba(0, 178, 255, 0.35)",
          transition: "all 0.5s ease",
          "&:hover": {
            background: "var(--hover-gradient)",
            boxShadow: "0px 10px 30px rgba(0, 178, 255, 0.5))",
          },
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: { xs: 250, md: 300 },
          height: { xs: 250, md: 300 },
          zIndex: 2,
          top: -20,
          left: { xs: 300, md: 292 },
          background: "var(--gradient)",
          boxShadow: "0px 10px 30px rgba(0, 178, 255, 0.35)",
          transition: "all 0.5s ease",
          "&:hover": {
            background: "var(--hover-gradient)",
            boxShadow: "0px 10px 30px rgba(0, 178, 255, 0.5))",
          },
          borderRadius: 999,
          p: 0.1,
        }}
      >
        <Avatar
          src={avatar}
          sx={{
            width: "100%",
            height: "100%",
          }}
        />
      </Box>
    </Box>
  );
};
export default AvatarCircle;
