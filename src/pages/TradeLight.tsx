import { FunctionComponent } from "react";
import LeftLight from "../components/LeftLight";
import DesktopMainTabs from "../components/DesktopMainTabs";
import DesktopHeaderTradeTable from "../components/DesktopHeaderTradeTable";
import DesktopLightTradeChart from "../components/DesktopLightTradeChart";
import DesktopTradingTable from "../components/DesktopTradingTable";
import RightLight from "../components/RightLight";
import styles from "./TradeLight.module.css";

const TradeLight: FunctionComponent = () => {
  return (
    <div className={styles.tradeLight}>
      <LeftLight />
      <div className={styles.tradeLightInner}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.titleWrapper}>
              <a className={styles.title}>Review</a>
            </div>
            <DesktopMainTabs />
          </div>
          <div className={styles.desktopheaderTradeTableParent}>
            <DesktopHeaderTradeTable />
            <DesktopLightTradeChart />
            <DesktopTradingTable />
          </div>
        </div>
      </div>
      <RightLight />
    </div>
  );
};

export default TradeLight;
