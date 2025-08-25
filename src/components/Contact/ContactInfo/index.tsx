import { Stack, Typography } from "@mui/material";
import TypographyComponent from "../../TypographyComponent";
import type { IContactInfo } from "../../../data/types";

const ContactInfo = ({ contactInfos }: { contactInfos: IContactInfo[] }) => {
  return (
    <>
      <TypographyComponent variant="h5">Let's talk</TypographyComponent>
      <Typography variant="body2" sx={{ fontSize: 18, mb: 2, color: "white" }}>
        I'm open to discussing web development projects or partnership
        opportunities.
      </Typography>
      {contactInfos.map((info) => (
        <Stack
          key={info.id}
          direction="row"
          spacing={1}
          sx={{ mb: 2 }}
          alignItems="center"
        >
          {info.icon}
          <Typography>{info.name}</Typography>
        </Stack>
      ))}
    </>
  );
};
export default ContactInfo;
