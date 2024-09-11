import { FunctionComponent } from "react";
import styles from "./DesktopSingInIllustration.module.css";

export type DesktopSingInIllustrationType = {
  className?: string;
};

const DesktopSingInIllustration: FunctionComponent<
  DesktopSingInIllustrationType
> = ({ className = "" }) => {
  return (
    <div className={[styles.desktopsingInIllustration, className].join(" ")}>
      <div className={styles.desktop}>
        <img className={styles.tintIcon} alt="" src="/tint.svg" />
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <img className={styles.vectorIcon1} alt="" src="/vector-1.svg" />
        <img
          className={styles.vectorIcon2}
          loading="lazy"
          alt=""
          src="/vector-2.svg"
        />
        <img className={styles.vectorIcon3} alt="" src="/vector-3.svg" />
        <img className={styles.vectorIcon4} alt="" src="/vector.svg" />
        <img className={styles.vectorIcon5} alt="" src="/vector-5.svg" />
        <img className={styles.vectorIcon6} alt="" src="/vector-6.svg" />
        <img
          className={styles.desktopChild}
          loading="lazy"
          alt=""
          src="/vector-30.svg"
        />
        <img className={styles.desktopItem} alt="" src="/vector-34.svg" />
        <div className={styles.ellipseParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameChild} />
          <div className={styles.frameChild} />
          <div className={styles.frameChild} />
          <div className={styles.frameChild} />
          <div className={styles.frameChild} />
        </div>
        <div className={styles.desktopInner} />
        <img
          className={styles.userIcon}
          loading="lazy"
          alt=""
          src="/user@2x.png"
        />
      </div>
      <img className={styles.decorateIcon} alt="" />
    </div>
  );
};

export default DesktopSingInIllustration;
