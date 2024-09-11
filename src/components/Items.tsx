import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import ComponentItem from "./ComponentItem";
import styles from "./Items.module.css";

export type ItemsType = {
  className?: string;
};

const Items: FunctionComponent<ItemsType> = ({ className = "" }) => {
  return (
    <div className={[styles.items, className].join(" ")}>
      <Button
        className={styles.componentitem}
        startIcon={
          <img width="24px" height="24px" src="/setupaccount-setup.svg" />
        }
        disableElevation
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#fff",
          fontSize: "14",
          background: "#613de4",
          borderRadius: "4px",
          "&:hover": { background: "#613de4" },
          height: 56,
        }}
      >
        Account Setup
      </Button>
      <ComponentItem label="Plan" analyticsLogout="/setupplan.svg" />
      <div className={styles.componentitem1}>
        <div className={styles.stateLayer}>
          <input className={styles.setuppayment} type="checkbox" />
          <div className={styles.label}>Payment</div>
        </div>
      </div>
      <div className={styles.componentitem2}>
        <div className={styles.stateLayer1}>
          <img
            className={styles.analyticslearningIcon}
            alt=""
            src="/analyticslearning.svg"
          />
          <div className={styles.label}>Learning</div>
        </div>
      </div>
    </div>
  );
};

export default Items;
