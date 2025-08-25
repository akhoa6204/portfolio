import { Alert, Snackbar } from "@mui/material";
interface IToastModal {
  message?: string;
  open: boolean;
  status?: boolean;
  handleCloseToast: () => void;
}
const ToastModal = ({
  message,
  open,
  status,
  handleCloseToast,
}: IToastModal) => {
  return (
    <Snackbar
      key={message}
      open={open}
      autoHideDuration={2000}
      onClose={handleCloseToast}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert
        severity={status ? "success" : "error"}
        variant="filled"
        sx={{ color: "white" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};
export default ToastModal;
