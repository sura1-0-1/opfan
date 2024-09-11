import { FunctionComponent } from "react";
import styles from "./DesktopSum.module.css";

export type DesktopSumType = {
  className?: string;
};

const DesktopSum: FunctionComponent<DesktopSumType> = ({ className = "" }) => {
  return (
    <div className={[styles.desktopsum, className].join(" ")}>
      <div className={styles.content}>
        <div className={styles.inputText}>
          <div className={styles.inputText1}>Sum</div>
        </div>
        <div className={styles.inputTextParent}>
          <div className={styles.inputText}>
            <div className={styles.inputText3}>Min 0.00001</div>
          </div>
          <div className={styles.inputText4}>
            <div className={styles.inputText5}>Btc</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopSum;
