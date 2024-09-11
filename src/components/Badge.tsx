import { FunctionComponent } from "react";
import styles from "./Badge.module.css";

export type BadgeType = {
  className?: string;
  singleDigits?: string;
};

const Badge: FunctionComponent<BadgeType> = ({
  className = "",
  singleDigits = "3",
}) => {
  return (
    <div className={[styles.badge, className].join(" ")}>
      <div className={styles.badgeLabel}>{singleDigits}</div>
    </div>
  );
};

export default Badge;
