import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./DesktopTradeButton.module.css";

export type DesktopTradeButtonType = {
  className?: string;
  text?: string;
  tradeButtonLabel?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
};

const DesktopTradeButton: FunctionComponent<DesktopTradeButtonType> = ({
  className = "",
  text = "BTC ",
  propBackgroundColor,
  tradeButtonLabel,
}) => {
  const desktopTradeButtonStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div
      className={[styles.desktoptradeButton, className].join(" ")}
      style={desktopTradeButtonStyle}
    >
      <div className={styles.tradeButtonLabel}>{tradeButtonLabel}</div>
      <div className={styles.tradeButtonLabel1}>{text}</div>
    </div>
  );
};

export default DesktopTradeButton;
