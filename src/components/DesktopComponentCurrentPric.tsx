import { FunctionComponent } from "react";
import styles from "./DesktopComponentCurrentPric.module.css";

export type DesktopComponentCurrentPricType = {
  className?: string;
};

const DesktopComponentCurrentPric: FunctionComponent<
  DesktopComponentCurrentPricType
> = ({ className = "" }) => {
  return (
    <div className={[styles.desktopcomponentcurrentPric, className].join(" ")}>
      <div className={styles.priceValue}>$0.00933</div>
    </div>
  );
};

export default DesktopComponentCurrentPric;
