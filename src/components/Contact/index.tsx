import { Container, Grid } from "@mui/material";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { contactInfos } from "../../data";
import HeadingSection from "../HeadingSection";
import ToastModal from "./ToastModal";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export interface FormData {
  title: string;
  name: string;
  email: string;
  message: string;
}
interface StateToast {
  open: boolean;
  status?: boolean;
  message?: string;
}
type FieldName = keyof FormData;
export type Errors = Partial<FormData>;

export interface Field {
  id: FieldName;
  name: FieldName;
  type: "text" | "email" | "area";
  label: string;
  autoComplete?: string;
}

const defaultData: FormData = { title: "", name: "", email: "", message: "" };

const fields: Field[] = [
  {
    id: "name",
    name: "name",
    type: "text",
    label: "Name",
    autoComplete: "name",
  },
  {
    id: "email",
    name: "email",
    type: "email",
    label: "Email",
    autoComplete: "email",
  },
  { id: "title", name: "title", type: "text", label: "Title" },
  { id: "message", name: "message", type: "area", label: "Message" },
];

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

export default function Contact() {
  const [formData, setFormData] = useState<FormData>(defaultData);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [toast, setToast] = useState<StateToast>({ open: false });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          title: formData.title,
          name: formData.name,
          email: formData.email,
          reply_to: formData.email,
          message: formData.message,
        },
        { publicKey: PUBLIC_KEY }
      );

      setToast({
        open: true,
        status: true,
        message: "Message sent. I'll get back to you soon!",
      });
      setFormData(defaultData);
    } catch (err) {
      console.error(err);
      setToast({
        open: true,
        status: false,
        message: "Failed to send. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };
  const handleCloseToast = () => setToast({ open: false });
  return (
    <Container id="contact" sx={{ mb: 3 }}>
      <HeadingSection>Contact me</HeadingSection>

      <Grid container columnSpacing={2} rowSpacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <ContactInfo contactInfos={contactInfos} />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <ContactForm
            fields={fields}
            formData={formData}
            isLoading={isLoading}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </Grid>
      </Grid>

      <ToastModal handleCloseToast={handleCloseToast} {...toast} />
    </Container>
  );
}
