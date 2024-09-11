import { FunctionComponent } from "react";
import DesktopComponentItemTradeT from "./DesktopComponentItemTradeT";
import styles from "./DesktopTradeTabs.module.css";

export type DesktopTradeTabsType = {
  className?: string;
};

const DesktopTradeTabs: FunctionComponent<DesktopTradeTabsType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.desktoptradeTabs, className].join(" ")}>
      <DesktopComponentItemTradeT
        text="Limit"
        propBorderBottom="2px solid #613de4"
        propBackgroundColor="#f5f7fc"
        propFlex="1"
        propMinWidth="233px"
        propWidth="unset"
        propColor="#613de4"
        propFlex1="unset"
      />
      <DesktopComponentItemTradeT text="Market" />
      <div className={styles.desktopcomponentitemTradeT}>
        <div className={styles.labelText}>Favorites</div>
      </div>
      <div className={styles.desktopcomponentitemTradeT1}>
        <div className={styles.labelText}>Levels</div>
      </div>
      <div className={styles.iconButton}>
        <img className={styles.shortArrowIcon} alt="" src="/short-arrow.svg" />
      </div>
    </div>
  );
};

export default DesktopTradeTabs;
