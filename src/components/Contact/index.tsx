import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useState } from "react";
import emailjs from "@emailjs/browser";

interface FormData {
  title: string;
  name: string;
  email: string;
  message: string;
}

const defaultData: FormData = { title: "", name: "", email: "", message: "" };

const fields = [
  { name: "name", type: "text", label: "Name", autoComplete: "name" },
  { name: "email", type: "email", label: "Email", autoComplete: "email" },
  { name: "title", type: "text", label: "Title" },
  { name: "message", type: "area", label: "Message" },
];

const infos = [
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

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

export default function Contact() {
  const [formData, setFormData] = useState<FormData>(defaultData);
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState<{
    open: boolean;
    ok?: boolean;
    msg?: string;
  }>({ open: false });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

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
        ok: true,
        msg: "Message sent. I'll get back to you soon!",
      });
      setFormData(defaultData);
    } catch (err) {
      console.error(err);
      setToast({
        open: true,
        ok: false,
        msg: "Failed to send. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container id="contact" sx={{ mb: 3 }}>
      <Typography variant="h5" fontWeight={700} sx={{ mb: 3 }}>
        Contact me
      </Typography>

      <Grid container columnSpacing={2} rowSpacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            variant="h5"
            sx={{
              mb: 2,
              textTransform: "capitalize",
              fontWeight: 700,
              background: "var(--gradient)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
              width: "fit-content",
            }}
          >
            Let's talk
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontSize: 18, mb: 2, color: "white" }}
          >
            I'm open to discussing web development projects or partnership
            opportunities.
          </Typography>
          {infos.map((info, idx) => (
            <Stack
              key={idx}
              direction="row"
              spacing={1}
              sx={{ mb: 2 }}
              alignItems="center"
            >
              {info.icon}
              <Typography>{info.name}</Typography>
            </Stack>
          ))}
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Paper
            variant="outlined"
            sx={{ background: "var(--gradient)", overflow: "hidden", p: 0.1 }}
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ background: "#111827", p: 2, borderRadius: 1 }}
            >
              {fields.map((field) => (
                <TextField
                  key={field.name}
                  label={field.label}
                  name={field.name}
                  type={field.type === "area" ? "text" : field.type}
                  fullWidth
                  required
                  value={(formData as any)[field.name]}
                  onChange={handleChange}
                  multiline={field.type === "area"}
                  rows={field.type === "area" ? 4 : undefined}
                  autoComplete={field.autoComplete}
                  sx={{
                    mb: 2,
                    "& .MuiOutlinedInput-root": {
                      "&:hover fieldset": { borderColor: "#9333ea" },
                      "&.Mui-focused fieldset": { borderColor: "#a855f7" },
                    },
                    "& .MuiInputLabel-root.Mui-focused": { color: "#a855f7" },
                  }}
                />
              ))}

              <Stack direction="row" justifyContent="center">
                <Button
                  type="submit"
                  variant="contained"
                  disabled={isLoading}
                  sx={{
                    background: "var(--gradient)",
                    color: "white",
                    py: 1,
                    px: 3,
                    borderRadius: 999,
                    "&:hover": { opacity: 0.9 },
                  }}
                >
                  {isLoading ? "Sending..." : "Send message"}
                </Button>
              </Stack>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      <Snackbar
        key={toast.msg}
        open={toast.open}
        autoHideDuration={2000}
        onClose={() => setToast({ open: false })}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          severity={toast.ok ? "success" : "error"}
          variant="filled"
          sx={{ color: "white" }}
        >
          {toast.msg}
        </Alert>
      </Snackbar>
    </Container>
  );
}
