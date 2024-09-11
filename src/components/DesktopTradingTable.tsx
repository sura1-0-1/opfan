import { FunctionComponent } from "react";
import DesktopTradeTabs from "./DesktopTradeTabs";
import DesktopPrice from "./DesktopPrice";
import DesktopSum from "./DesktopSum";
import DesktopTotal from "./DesktopTotal";
import DesktopTradeButton from "./DesktopTradeButton";
import styles from "./DesktopTradingTable.module.css";

export type DesktopTradingTableType = {
  className?: string;
};

const DesktopTradingTable: FunctionComponent<DesktopTradingTableType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.desktoptradingTable, className].join(" ")}>
      <DesktopTradeTabs />
      <div className={styles.price}>
        <DesktopPrice />
        <DesktopPrice />
      </div>
      <div className={styles.price}>
        <DesktopSum />
        <DesktopSum />
      </div>
      <div className={styles.totalContainerParent}>
        <div className={styles.totalContainer}>
          <DesktopTotal />
          <div className={styles.limitContainer}>
            <div className={styles.limitFields}>
              <div className={styles.available}>Available</div>
              <div className={styles.available}>0.00USDT</div>
            </div>
            <div className={styles.limitFields}>
              <div className={styles.available}>Max Limit B uy</div>
              <div className={styles.available}>0.00BTC</div>
            </div>
          </div>
        </div>
        <div className={styles.totalContainer1}>
          <DesktopTotal />
          <div className={styles.frameParent}>
            <div className={styles.limitFields}>
              <div className={styles.available}>Available</div>
              <div className={styles.available}>0.00USDT</div>
            </div>
            <div className={styles.limitFields}>
              <div className={styles.available}>Max Limit Buy</div>
              <div className={styles.available}>0.00BTC</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.desktoptradeButtonParent}>
        <DesktopTradeButton
          text="BTC "
          propBackgroundColor="#3bb167"
          tradeButtonLabel="Buy"
        />
        <DesktopTradeButton text="BTC " tradeButtonLabel="Sell" />
      </div>
    </div>
  );
};

export default DesktopTradingTable;
