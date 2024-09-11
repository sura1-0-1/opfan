import { FunctionComponent, useMemo, type CSSProperties } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import styles from "./DesktopPassword.module.css";

export type DesktopPasswordType = {
  className?: string;
  forgotText?: boolean;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const DesktopPassword: FunctionComponent<DesktopPasswordType> = ({
  className = "",
  forgotText = true,
  propWidth,
}) => {
  const forgotPasswordStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={[styles.desktoppassword, className].join(" ")}>
      <div className={styles.password}>Password</div>
      <FormControl
        className={styles.input}
        variant="standard"
        sx={{
          borderColor: "#cdd5e9",
          borderStyle: "SOLID",
          borderTopWidth: "1px",
          borderRightWidth: "1px",
          borderBottomWidth: "1px",
          borderLeftWidth: "1px",
          backgroundColor: "#fbfcfe",
          borderRadius: "4px",
          width: "100%",
          height: "40px",
          m: 0,
          p: 0,
          "& .MuiInputBase-root": {
            m: 0,
            p: 0,
            minHeight: "40px",
            justifyContent: "center",
            display: "inline-flex",
          },
          "& .MuiInputLabel-root": {
            m: 0,
            p: 0,
            minHeight: "40px",
            display: "inline-flex",
          },
          "& .MuiMenuItem-root": {
            m: 0,
            p: 0,
            height: "40px",
            display: "inline-flex",
          },
          "& .MuiSelect-select": {
            m: 0,
            p: 0,
            height: "40px",
            alignItems: "center",
            display: "inline-flex",
          },
          "& .MuiInput-input": { m: 0, p: 0 },
          "& .MuiInputBase-input": {
            color: "#d4d4d4",
            fontSize: 16,
            fontWeight: "Regular",
            fontFamily: "Roboto",
            textAlign: "left",
            p: "0 !important",
            marginLeft: "16px",
          },
        }}
      >
        <InputLabel color="secondary" />
        <Select
          color="secondary"
          disableUnderline
          displayEmpty
          IconComponent={() => (
            <img
              width="24px"
              height="24px"
              src="/show--hide.svg"
              style={{ marginRight: "16px" }}
            />
          )}
        >
          <MenuItem>Enter your password</MenuItem>
        </Select>
        <FormHelperText />
      </FormControl>
      {forgotText && (
        <div className={styles.forgotPassword} style={forgotPasswordStyle}>
          Forgot Password?
        </div>
      )}
    </div>
  );
};

export default DesktopPassword;
