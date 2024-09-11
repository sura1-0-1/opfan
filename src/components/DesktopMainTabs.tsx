import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import DesktopComponentsItemMainT from "./DesktopComponentsItemMainT";
import styles from "./DesktopMainTabs.module.css";

export type DesktopMainTabsType = {
  className?: string;
};

const DesktopMainTabs: FunctionComponent<DesktopMainTabsType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.desktopmainTabs, className].join(" ")}>
      <Button
        className={styles.desktopcomponentsitemMainT}
        disableElevation
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#fff",
          fontSize: "14",
          background: "#613de4",
          border: "#613de4 solid 1px",
          borderRadius: "2px 0px 0px 2px",
          "&:hover": { background: "#613de4" },
          height: 29,
        }}
      >
        Trade
      </Button>
      <div className={styles.labelContainer}>
        <DesktopComponentsItemMainT
          label="Wallet"
          propFlex="0.6817"
          propBorderRadius="unset"
          propMarginLeft="unset"
        />
        <DesktopComponentsItemMainT label="Analytics" />
      </div>
    </div>
  );
};

export default DesktopMainTabs;
