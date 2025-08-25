import { Box, Paper, Stack, TextField } from "@mui/material";
import type { Errors, Field, FormData } from "..";
import ButtonComponent from "../../Button";
interface IContactInfo {
  fields: Field[];
  formData: FormData;
  errors: Errors;
  isLoading: boolean;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}
const ContactForm = ({
  fields,
  formData,
  errors,
  isLoading,
  handleSubmit,
  handleChange,
}: IContactInfo) => {
  return (
    <Paper
      variant="outlined"
      sx={{ background: "var(--gradient)", overflow: "hidden", p: 0.1 }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ background: "#111827", p: 2, borderRadius: 1 }}
        noValidate
      >
        {fields.map((field) => (
          <TextField
            key={field.id}
            label={field.label}
            name={field.name}
            type={field.type === "area" ? "text" : field.type}
            fullWidth
            required
            value={formData[field.name]}
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
            error={!!errors[field.name]}
            helperText={errors[field.name]}
          />
        ))}

        <Stack direction="row" justifyContent="center">
          <ButtonComponent
            type="submit"
            variant="contained"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send message"}
          </ButtonComponent>
        </Stack>
      </Box>
    </Paper>
  );
};
export default ContactForm;
