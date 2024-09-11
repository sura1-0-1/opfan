import { FunctionComponent } from "react";
import styles from "./DesktopProgressBar.module.css";

export type DesktopProgressBarType = {
  className?: string;
};

const DesktopProgressBar: FunctionComponent<DesktopProgressBarType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.desktopprogressBar, className].join(" ")}>
      <div className={styles.desktopprogressBarChild} />
    </div>
  );
};

export default DesktopProgressBar;
