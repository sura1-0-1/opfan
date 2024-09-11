import { FunctionComponent } from "react";
import Items from "./Items";
import ComponentItem from "./ComponentItem";
import styles from "./NavigationDrawer.module.css";

export type NavigationDrawerType = {
  className?: string;
};

const NavigationDrawer: FunctionComponent<NavigationDrawerType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.navigationDrawer, className].join(" ")}>
      <div className={styles.headermenu}>
        <div className={styles.headline}>
          <div className={styles.logoWrapper}>
            <img className={styles.logoIcon} loading="lazy" alt="" />
          </div>
        </div>
        <Items />
      </div>
      <div className={styles.helplogout}>
        <ComponentItem label="Help" analyticsLogout="/analyticshelp.svg" />
        <ComponentItem label="Logout" analyticsLogout="/analyticslogout.svg" />
      </div>
    </div>
  );
};

export default NavigationDrawer;
