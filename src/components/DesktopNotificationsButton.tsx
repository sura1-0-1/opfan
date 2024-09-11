import { FunctionComponent } from "react";
import Badge from "./Badge";
import styles from "./DesktopNotificationsButton.module.css";

export type DesktopNotificationsButtonType = {
  className?: string;
  notification?: string;
  singleDigits?: string;
};

const DesktopNotificationsButton: FunctionComponent<
  DesktopNotificationsButtonType
> = ({ className = "", notification, singleDigits }) => {
  return (
    <div className={[styles.desktopnotificationsButton, className].join(" ")}>
      <div className={styles.notificationIcon}>
        <img
          className={styles.notificationIcon1}
          loading="lazy"
          alt=""
          src={notification}
        />
        <Badge singleDigits={singleDigits} />
      </div>
    </div>
  );
};

export default DesktopNotificationsButton;
