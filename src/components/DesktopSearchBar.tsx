import { FunctionComponent } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import styles from "./DesktopSearchBar.module.css";

export type DesktopSearchBarType = {
  className?: string;
};

const DesktopSearchBar: FunctionComponent<DesktopSearchBarType> = ({
  className = "",
}) => {
  return (
    <TextField
      className={[styles.desktopsearchBar, className].join(" ")}
      placeholder="Search"
      variant="outlined"
      InputProps={{
        endAdornment: <img width="24px" height="24px" src="/search.svg" />,
      }}
      sx={{
        "& fieldset": { borderColor: "#cdd5e9" },
        "& .MuiInputBase-root": {
          height: "48px",
          backgroundColor: "#fbfcfe",
          paddingRight: "16px",
        },
        "& .MuiInputBase-input": { color: "#d4d4d4" },
      }}
    />
  );
};

export default DesktopSearchBar;
