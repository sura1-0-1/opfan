import { FunctionComponent } from "react";
import DesktopSingInIllustration from "./DesktopSingInIllustration";
import styles from "./LeftContent.module.css";

export type LeftContentType = {
  className?: string;
};

const LeftContent: FunctionComponent<LeftContentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.leftContent, className].join(" ")}>
      <img
        className={styles.decorativeElementsIcon}
        alt=""
        src="/decorative-elements.svg"
      />
      <img className={styles.logoIcon} loading="lazy" alt="" />
      <div className={styles.desktopsingInIllustrationWrapper}>
        <DesktopSingInIllustration />
      </div>
    </div>
  );
};

export default LeftContent;
