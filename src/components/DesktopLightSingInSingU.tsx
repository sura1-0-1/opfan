import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import DesktopComponentSingInSi from "./DesktopComponentSingInSi";
import styles from "./DesktopLightSingInSingU.module.css";

export type DesktopLightSingInSingUType = {
  className?: string;
};

const DesktopLightSingInSingU: FunctionComponent<
  DesktopLightSingInSingUType
> = ({ className = "" }) => {
  return (
    <div className={[styles.desktoplightSingInSingU, className].join(" ")}>
      <Button
        className={styles.desktopcomponentsingInSi}
        disableElevation
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#fff",
          fontSize: "16",
          background: "#613de4",
          border: "#613de4 solid 1px",
          borderRadius: "2px 0px 0px 2px",
          "&:hover": { background: "#613de4" },
          height: 36,
        }}
      >
        Sing In
      </Button>
      <DesktopComponentSingInSi labelText="Sign Up" />
    </div>
  );
};

export default DesktopLightSingInSingU;
