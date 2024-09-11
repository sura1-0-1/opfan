import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./MobileComponentSingInSin.module.css";

export type MobileComponentSingInSinType = {
  className?: string;
  labelText?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propTextDecoration?: CSSProperties["textDecoration"];
};

const MobileComponentSingInSin: FunctionComponent<
  MobileComponentSingInSinType
> = ({ className = "", propHeight, labelText, propTextDecoration }) => {
  const mobileComponentSingInSinStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const labelTextStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  return (
    <div
      className={[styles.mobilecomponentsingInSin, className].join(" ")}
      style={mobileComponentSingInSinStyle}
    >
      <a className={styles.labelText} style={labelTextStyle}>
        {labelText}
      </a>
    </div>
  );
};

export default MobileComponentSingInSin;
