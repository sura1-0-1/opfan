import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./DesktopComponentRecentTrans.module.css";

export type DesktopComponentRecentTransType = {
  className?: string;
  totals?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propColor?: CSSProperties["color"];
  propTextAlign?: CSSProperties["textAlign"];
};

const DesktopComponentRecentTrans: FunctionComponent<
  DesktopComponentRecentTransType
> = ({
  className = "",
  totals = "8,356",
  propPadding,
  propColor,
  propTextAlign,
}) => {
  const desktopComponentRecentTransStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const totalValueStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
      textAlign: propTextAlign,
    };
  }, [propColor, propTextAlign]);

  return (
    <div
      className={[styles.desktopcomponentrecentTrans, className].join(" ")}
      style={desktopComponentRecentTransStyle}
    >
      <div className={styles.totalValue} style={totalValueStyle}>
        {totals}
      </div>
    </div>
  );
};

export default DesktopComponentRecentTrans;
