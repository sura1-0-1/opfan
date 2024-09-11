import { FunctionComponent } from "react";
import DesktopMenu from "./DesktopMenu";
import DesktopNotificationsButton from "./DesktopNotificationsButton";
import DesktopOrderBook from "./DesktopOrderBook";
import DesktopRecentTransactions from "./DesktopRecentTransactions";
import styles from "./MarketData.module.css";

export type MarketDataType = {
  className?: string;
};

const MarketData: FunctionComponent<MarketDataType> = ({ className = "" }) => {
  return (
    <div className={[styles.marketData, className].join(" ")}>
      <div className={styles.menuContainer}>
        <DesktopMenu
          avatar="/avatar@2x.png"
          label="User Name"
          shortArrow="/short-arrow-4.svg"
        />
        <DesktopNotificationsButton
          notification="/notification.svg"
          singleDigits="3"
        />
      </div>
      <div className={styles.orderBookParent}>
        <a className={styles.orderBook}>Order Book</a>
        <DesktopOrderBook />
      </div>
      <div className={styles.orderBookParent}>
        <h3 className={styles.recentTransactions}>Recent transactions</h3>
        <DesktopRecentTransactions />
      </div>
    </div>
  );
};

export default MarketData;
