import { FunctionComponent } from "react";
import styles from "./DesktopPrice.module.css";

export type DesktopPriceType = {
  className?: string;
};

const DesktopPrice: FunctionComponent<DesktopPriceType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.desktopprice, className].join(" ")}>
      <div className={styles.content}>
        <div className={styles.inputText}>
          <div className={styles.totalSumEntry}>Price</div>
        </div>
        <div className={styles.inputTextParent}>
          <div className={styles.inputText}>
            <div className={styles.currentSumInput}>36 478,1</div>
          </div>
          <div className={styles.inputText}>
            <div className={styles.finalSumInput}>Usdt</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopPrice;
