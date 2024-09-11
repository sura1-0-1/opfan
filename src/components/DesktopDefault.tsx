import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./DesktopDefault.module.css";

export type DesktopDefaultType = {
  className?: string;
  rightIcon?: boolean;
  caption?: string;
  leftIcon?: boolean;
  calendar?: string;
  contentPlaceholder?: string;
  shortArrow?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth?: CSSProperties["width"];
  propRowGap?: CSSProperties["rowGap"];
  propOverflow?: CSSProperties["overflow"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const DesktopDefault: FunctionComponent<DesktopDefaultType> = ({
  className = "",
  rightIcon = false,
  caption = "Date Of Birth",
  leftIcon = true,
  propFlex,
  propMinWidth,
  propAlignSelf,
  propWidth,
  propRowGap,
  calendar,
  propOverflow,
  contentPlaceholder,
  propMinWidth1,
  shortArrow,
}) => {
  const desktopDefaultStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propFlex, propMinWidth, propAlignSelf, propWidth]);

  const inputStyle: CSSProperties = useMemo(() => {
    return {
      rowGap: propRowGap,
    };
  }, [propRowGap]);

  const calendarIconStyle: CSSProperties = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  const contentStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div
      className={[styles.desktopdefault, className].join(" ")}
      style={desktopDefaultStyle}
    >
      <div className={styles.default}>{caption}</div>
      <div className={styles.input} style={inputStyle}>
        {leftIcon && (
          <div className={styles.calendarInput}>
            <img
              className={styles.calendarIcon}
              alt=""
              src={calendar}
              style={calendarIconStyle}
            />
          </div>
        )}
        <input
          className={styles.content}
          placeholder={contentPlaceholder}
          type="text"
          style={contentStyle}
        />
        {rightIcon && (
          <div className={styles.shortArrowWrapper}>
            <img className={styles.calendarIcon} alt="" src={shortArrow} />
          </div>
        )}
      </div>
    </div>
  );
};

export default DesktopDefault;
