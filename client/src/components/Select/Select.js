import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
const Selections = ({ name, label, labelName, value, onChange, menuItems }) => {
  return (
    <FormControl style={{width: "100%"}}>
      <InputLabel id={label}>{labelName}</InputLabel>
      <Select labelId={label} name={name} value={value} onChange={onChange} autoWidth>
        {menuItems.map((item,index) => {
          return <MenuItem key={index} value={item}>{item}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
};

export default Selections;
