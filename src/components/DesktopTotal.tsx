import { FunctionComponent } from "react";
import styles from "./DesktopTotal.module.css";

export type DesktopTotalType = {
  className?: string;
};

const DesktopTotal: FunctionComponent<DesktopTotalType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.desktoptotal, className].join(" ")}>
      <div className={styles.content}>
        <div className={styles.inputText}>
          <div className={styles.inputText1}>Total</div>
        </div>
        <div className={styles.inputText2}>
          <div className={styles.inputText3}>Usdt</div>
        </div>
      </div>
    </div>
  );
};

export default DesktopTotal;
