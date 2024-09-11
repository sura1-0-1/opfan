import { FunctionComponent } from "react";
import styles from "./ComponentItem.module.css";

export type ComponentItemType = {
  className?: string;
  label?: string;
  analyticsLogout?: string;
};

const ComponentItem: FunctionComponent<ComponentItemType> = ({
  className = "",
  label = "Logout",
  analyticsLogout,
}) => {
  return (
    <div className={[styles.componentitem, className].join(" ")}>
      <div className={styles.stateLayer}>
        <img
          className={styles.analyticslogoutIcon}
          loading="lazy"
          alt=""
          src={analyticsLogout}
        />
        <div className={styles.label}>{label}</div>
      </div>
    </div>
  );
};

export default ComponentItem;
