import { FunctionComponent } from "react";
import styles from "./DesktopMenu.module.css";

export type DesktopMenuType = {
  className?: string;
  avatar?: string;
  label?: string;
  shortArrow?: string;
};

const DesktopMenu: FunctionComponent<DesktopMenuType> = ({
  className = "",
  avatar,
  label,
  shortArrow,
}) => {
  return (
    <div className={[styles.desktopmenu, className].join(" ")}>
      <div className={styles.avatarUserName}>
        <img className={styles.avatarIcon} alt="" src={avatar} />
        <div className={styles.userName}>
          <a className={styles.label}>{label}</a>
        </div>
      </div>
      <img className={styles.shortArrowIcon} alt="" src={shortArrow} />
    </div>
  );
};

export default DesktopMenu;
