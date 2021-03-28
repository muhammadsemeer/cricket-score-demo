import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { useState } from "react";

export const SayAWord = ({ open, close }) => {
  const [word, setWord] = useState("");
  const sayWords = [
    "Awesome Shot",
    "Extraordinary",
    "Smashed",
    "Killed",
    "Banged",
    "Classic",
    "Smacked",
    "Killer",
    "Fabulous",
    "Electrifying",
    "Power shot",
    "Yorker",
    "Glorious",
    "Blaster",
    "Sixer king",
  ];
  const handleChange = (event, value) => {
    setWord(event.target.value || value);
  };
  return (
    <>
      <Dialog open={open} onClose={close} fullWidth>
        <DialogTitle>Enter Full Screen Word</DialogTitle>
        <DialogContent>
          <Autocomplete
            freeSolo
            options={sayWords.map((word) => word)}
            onChange={handleChange}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Pick One or Enter"
                margin="normal"
                variant="outlined"
                onChange={handleChange}
              />
            )}
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
