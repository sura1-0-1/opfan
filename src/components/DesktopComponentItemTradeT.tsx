import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./DesktopComponentItemTradeT.module.css";

export type DesktopComponentItemTradeTType = {
  className?: string;
  text?: string;

  /** Style props */
  propBorderBottom?: CSSProperties["borderBottom"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propWidth?: CSSProperties["width"];
  propColor?: CSSProperties["color"];
  propFlex1?: CSSProperties["flex"];
};

const DesktopComponentItemTradeT: FunctionComponent<
  DesktopComponentItemTradeTType
> = ({
  className = "",
  text = "Market",
  propBorderBottom,
  propBackgroundColor,
  propFlex,
  propMinWidth,
  propWidth,
  propColor,
  propFlex1,
}) => {
  const desktopComponentItemTradeTStyle: CSSProperties = useMemo(() => {
    return {
      borderBottom: propBorderBottom,
      backgroundColor: propBackgroundColor,
      flex: propFlex,
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [
    propBorderBottom,
    propBackgroundColor,
    propFlex,
    propMinWidth,
    propWidth,
  ]);

  const labelText1Style: CSSProperties = useMemo(() => {
    return {
      color: propColor,
      flex: propFlex1,
    };
  }, [propColor, propFlex1]);

  return (
    <div
      className={[styles.desktopcomponentitemTradeT, className].join(" ")}
      style={desktopComponentItemTradeTStyle}
    >
      <div className={styles.labelText} style={labelText1Style}>
        {text}
      </div>
    </div>
  );
};

export default DesktopComponentItemTradeT;
