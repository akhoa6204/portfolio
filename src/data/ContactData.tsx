import type { IContactInfo } from "./types";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export const contactInfos: IContactInfo[] = [
  {
    icon: <EmailIcon sx={{ color: "#a855f7" }} />,
    name: "khoaanh662004@gmail.com",
  },
  { icon: <PhoneIcon sx={{ color: "#a855f7" }} />, name: "(84+) 562602721" },
  {
    icon: <LocationOnIcon sx={{ color: "#a855f7" }} />,
    name: "Hai Chau, Da Nang, VietNam",
  },
];
