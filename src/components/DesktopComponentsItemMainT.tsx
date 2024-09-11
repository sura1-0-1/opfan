import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./DesktopComponentsItemMainT.module.css";

export type DesktopComponentsItemMainTType = {
  className?: string;
  label?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propBorderRadius?: CSSProperties["borderRadius"];
  propMarginLeft?: CSSProperties["marginLeft"];
};

const DesktopComponentsItemMainT: FunctionComponent<
  DesktopComponentsItemMainTType
> = ({
  className = "",
  label = "Analytics",
  propFlex,
  propBorderRadius,
  propMarginLeft,
}) => {
  const desktopComponentsItemMainTStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      borderRadius: propBorderRadius,
      marginLeft: propMarginLeft,
    };
  }, [propFlex, propBorderRadius, propMarginLeft]);

  return (
    <div
      className={[styles.desktopcomponentsitemMainT, className].join(" ")}
      style={desktopComponentsItemMainTStyle}
    >
      <div className={styles.labelText}>{label}</div>
    </div>
  );
};

export default DesktopComponentsItemMainT;
