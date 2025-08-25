import type { IContactInfo } from "./types";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export const contactInfos: IContactInfo[] = [
  {
    id: "email",
    icon: <EmailIcon sx={{ color: "#13ADC7" }} />,
    name: "khoaanh662004@gmail.com",
  },
  {
    id: "phone",
    icon: <PhoneIcon sx={{ color: "#13ADC7" }} />,
    name: "(84+) 562602721",
  },
  {
    id: "address",
    icon: <LocationOnIcon sx={{ color: "#13ADC7" }} />,
    name: "Hai Chau, Da Nang, VietNam",
  },
];
