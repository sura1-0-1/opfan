import { FunctionComponent } from "react";
import styles from "./DesktopCheckbox.module.css";

export type DesktopCheckboxType = {
  className?: string;
};

const DesktopCheckbox: FunctionComponent<DesktopCheckboxType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.desktopcheckbox, className].join(" ")}>
      <input className={styles.container} type="checkbox" />
    </div>
  );
};

export default DesktopCheckbox;
