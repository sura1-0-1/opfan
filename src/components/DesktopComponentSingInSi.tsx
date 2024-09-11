import { FunctionComponent, useMemo, type CSSProperties } from "react";
import MobileComponentSingInSin from "./MobileComponentSingInSin";
import styles from "./DesktopComponentSingInSi.module.css";

export type DesktopComponentSingInSiType = {
  className?: string;
  labelText?: string;
  propHeight1?: string;
  propTextDecoration?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
};

const DesktopComponentSingInSi: FunctionComponent<
  DesktopComponentSingInSiType
> = ({
  className = "",
  propHeight,
  labelText,
  propHeight1,
  propTextDecoration,
}) => {
  const desktopComponentSingInSiStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div
      className={[styles.desktopcomponentsingInSi, className].join(" ")}
      style={desktopComponentSingInSiStyle}
    >
      <MobileComponentSingInSin
        propHeight={propHeight1}
        labelText={labelText}
        propTextDecoration={propTextDecoration}
      />
    </div>
  );
};

export default DesktopComponentSingInSi;
