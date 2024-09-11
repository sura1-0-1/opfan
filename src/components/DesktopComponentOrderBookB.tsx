import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./DesktopComponentOrderBookB.module.css";

export type DesktopComponentOrderBookBType = {
  className?: string;
  totals?: string;

  /** Style props */
  propBorderRadius?: CSSProperties["borderRadius"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propPadding?: CSSProperties["padding"];
  propTextAlign?: CSSProperties["textAlign"];
  propColor?: CSSProperties["color"];
};

const DesktopComponentOrderBookB: FunctionComponent<
  DesktopComponentOrderBookBType
> = ({
  className = "",
  totals = "0,500",
  propBorderRadius,
  propBackgroundColor,
  propPadding,
  propTextAlign,
  propColor,
}) => {
  const desktopComponentOrderBookBStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
      backgroundColor: propBackgroundColor,
      padding: propPadding,
    };
  }, [propBorderRadius, propBackgroundColor, propPadding]);

  const buyValueStyle: CSSProperties = useMemo(() => {
    return {
      textAlign: propTextAlign,
      color: propColor,
    };
  }, [propTextAlign, propColor]);

  return (
    <div
      className={[styles.desktopcomponentorderBookB, className].join(" ")}
      style={desktopComponentOrderBookBStyle}
    >
      <div className={styles.buyValue} style={buyValueStyle}>
        {totals}
      </div>
    </div>
  );
};

export default DesktopComponentOrderBookB;
