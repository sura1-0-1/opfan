import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./DesktopSecondary.module.css";

export type DesktopSecondaryType = {
  className?: string;
};

const DesktopSecondary: FunctionComponent<DesktopSecondaryType> = ({
  className = "",
}) => {
  return (
    <Button
      className={[styles.desktopsecondary, className].join(" ")}
      disableElevation
      variant="outlined"
      sx={{
        textTransform: "none",
        color: "#111112",
        fontSize: "16",
        borderColor: "#613de4",
        borderRadius: "4px",
        "&:hover": { borderColor: "#613de4" },
        height: 40,
      }}
    >
      Return to Home Screen
    </Button>
  );
};

export default DesktopSecondary;
