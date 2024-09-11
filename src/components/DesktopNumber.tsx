import { FunctionComponent, useState } from "react";
import { TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import styles from "./DesktopNumber.module.css";

export type DesktopNumberType = {
  className?: string;
};

const DesktopNumber: FunctionComponent<DesktopNumberType> = ({
  className = "",
}) => {
  const [
    desktopNumberDateTimePickerValue,
    setDesktopNumberDateTimePickerValue,
  ] = useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={[styles.desktopnumber, className].join(" ")}>
        <DatePicker
          value={desktopNumberDateTimePickerValue}
          onChange={(newValue: any) => {
            setDesktopNumberDateTimePickerValue(newValue);
          }}
          sx={{
            fieldset: {
              borderColor: "transparent",
              borderTopWidth: 1,
              borderRightWidth: 1,
              borderBottomWidth: 1,
              borderLeftWidth: 1,
            },
            "&:hover": {
              fieldset: { borderColor: "transparent" },
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent",
              },
            },
            "& input::placeholder": { textColor: "#613de4", fontSize: 12 },
            input: {
              color: "#613de4",
              fontSize: 12,
              textAlign: "center",
              fontWeight: "400",
            },
            "& .MuiInputBase-root": {
              height: 60,
              gap: "398px",
              flexDirection: { flexDirection: "row" },
            },
          }}
          slotProps={{
            textField: {
              size: "medium",
              fullWidth: true,
              required: false,
              autoFocus: false,
              error: false,
              helperText: "+1",
              placeholder: "Sing In with Email",
            },
            openPickerIcon: {
              component: () => <></>,
            },
          }}
          label="Mobile Number"
        />
      </div>
    </LocalizationProvider>
  );
};

export default DesktopNumber;
