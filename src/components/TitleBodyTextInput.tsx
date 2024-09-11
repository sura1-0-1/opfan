import { FunctionComponent } from "react";
import DesktopDefault from "./DesktopDefault";
import styles from "./TitleBodyTextInput.module.css";

export type TitleBodyTextInputType = {
  className?: string;
  titile?: string;
  bodyText?: string;
  caption?: string;
  calendar?: string;
  contentPlaceholder?: string;
  shortArrow?: string;
  rightIcon?: boolean;
  leftIcon?: boolean;
  propFlex?: string;
  propMinWidth?: string;
  propAlignSelf?: string;
  propWidth?: string;
  propRowGap?: string;
  propOverflow?: string;
  propMinWidth1?: string;
};

const TitleBodyTextInput: FunctionComponent<TitleBodyTextInputType> = ({
  className = "",
  titile,
  bodyText,
  caption,
  calendar,
  contentPlaceholder,
  shortArrow,
  rightIcon,
  leftIcon,
  propFlex,
  propMinWidth,
  propAlignSelf,
  propWidth,
  propRowGap,
  propOverflow,
  propMinWidth1,
}) => {
  return (
    <div className={[styles.titleBodyTextInput, className].join(" ")}>
      <div className={styles.titleBodyText}>
        <h3 className={styles.titile}>{titile}</h3>
        <div className={styles.bodyText}>{bodyText}</div>
      </div>
      <DesktopDefault
        rightIcon={rightIcon}
        caption={caption}
        leftIcon={leftIcon}
        propFlex={propFlex}
        propMinWidth={propMinWidth}
        propAlignSelf={propAlignSelf}
        propWidth={propWidth}
        propRowGap={propRowGap}
        calendar={calendar}
        propOverflow={propOverflow}
        contentPlaceholder={contentPlaceholder}
        propMinWidth1={propMinWidth1}
        shortArrow={shortArrow}
      />
    </div>
  );
};

export default TitleBodyTextInput;
