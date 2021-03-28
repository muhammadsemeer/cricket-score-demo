import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
} from "@material-ui/core";
import { useForm } from "../../utils/useForm/useForm";

export const HeaderDialog = ({ open, close }) => {
  const [value, handleChange] = useForm({
    header: "",
    subHeader: "",
  });
  return (
    <>
      <Dialog open={open} onClose={close} fullWidth>
        <DialogTitle>Enter Full Screen Word</DialogTitle>
        <DialogContent>
          <TextField
            name="header"
            label="Enter Header"
            margin="normal"
            value={value.header}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            name="subHeader"
            label="Enter Sub Header"
            margin="normal"
            value={value.subHeader}
            onChange={handleChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button color="primary">Ok</Button>
          <Button onClick={close} color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
