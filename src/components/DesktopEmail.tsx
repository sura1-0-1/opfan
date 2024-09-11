import { FunctionComponent } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import styles from "./DesktopEmail.module.css";

export type DesktopEmailType = {
  className?: string;
  singUpSingInText?: string;
};

const DesktopEmail: FunctionComponent<DesktopEmailType> = ({
  className = "",
  singUpSingInText = "Sing Up with Phone Number",
}) => {
  return (
    <div className={[styles.desktopemail, className].join(" ")}>
      <div className={styles.titlePhoneNumber}>
        <div className={styles.email}>Email</div>
        <div className={styles.singUpWith}>{singUpSingInText}</div>
      </div>
      <TextField
        className={styles.input}
        placeholder="username@gmail.com"
        variant="outlined"
        sx={{
          "& fieldset": { borderColor: "#cdd5e9" },
          "& .MuiInputBase-root": {
            height: "40px",
            backgroundColor: "#fbfcfe",
          },
          "& .MuiInputBase-input": { color: "#d4d4d4" },
        }}
      />
    </div>
  );
};

export default DesktopEmail;
