import { FunctionComponent } from "react";
import DesktopComponentRecentTrans from "./DesktopComponentRecentTrans";
import styles from "./DesktopRecentTransactions.module.css";

export type DesktopRecentTransactionsType = {
  className?: string;
};

const DesktopRecentTransactions: FunctionComponent<
  DesktopRecentTransactionsType
> = ({ className = "" }) => {
  return (
    <div className={[styles.desktoprecentTransactions, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.priceUsdtParent}>
              <div className={styles.priceUsdt}>Price (USDT)</div>
              <DesktopComponentRecentTrans
                totals="36 461,5"
                propPadding="0px 0px 0px 4px"
                propColor="#3bb167"
                propTextAlign="left"
              />
              <DesktopComponentRecentTrans
                totals="36 461,5"
                propPadding="0px 0px 0px 4px"
                propColor="#111112"
                propTextAlign="left"
              />
              <DesktopComponentRecentTrans
                totals="36 461,5"
                propPadding="0px 0px 0px 4px"
                propColor="#ef4444"
                propTextAlign="left"
              />
              <DesktopComponentRecentTrans
                totals="36 461,5"
                propPadding="0px 0px 0px 4px"
                propColor="#3bb167"
                propTextAlign="left"
              />
              <DesktopComponentRecentTrans
                totals="36 461,5"
                propPadding="0px 0px 0px 4px"
                propColor="#111112"
                propTextAlign="left"
              />
              <DesktopComponentRecentTrans
                totals="36 461,5"
                propPadding="0px 0px 0px 4px"
                propColor="#111112"
                propTextAlign="left"
              />
              <DesktopComponentRecentTrans
                totals="36 461,5"
                propPadding="0px 0px 0px 4px"
                propColor="#ef4444"
                propTextAlign="left"
              />
              <DesktopComponentRecentTrans
                totals="36 461,5"
                propPadding="0px 0px 0px 4px"
                propColor="#111112"
                propTextAlign="left"
              />
              <DesktopComponentRecentTrans
                totals="36 461,5"
                propPadding="0px 0px 0px 4px"
                propColor="#3bb167"
                propTextAlign="left"
              />
              <DesktopComponentRecentTrans
                totals="36 461,5"
                propPadding="0px 0px 0px 4px"
                propColor="#111112"
                propTextAlign="left"
              />
              <DesktopComponentRecentTrans
                totals="36 461,5"
                propPadding="0px 0px 0px 4px"
                propColor="#111112"
                propTextAlign="left"
              />
              <DesktopComponentRecentTrans
                totals="36 461,5"
                propPadding="0px 0px 0px 4px"
                propColor="#3bb167"
                propTextAlign="left"
              />
              <DesktopComponentRecentTrans
                totals="36 461,5"
                propPadding="0px 0px 0px 4px"
                propColor="#111112"
                propTextAlign="left"
              />
              <DesktopComponentRecentTrans
                totals="36 461,5"
                propPadding="0px 0px 0px 4px"
                propColor="#ef4444"
                propTextAlign="left"
              />
              <DesktopComponentRecentTrans
                totals="36 461,5"
                propPadding="0px 0px 0px 4px"
                propColor="#3bb167"
                propTextAlign="left"
              />
            </div>
            <div className={styles.quantityBtcParent}>
              <div className={styles.priceUsdt}>Quantity (BTC)</div>
              <DesktopComponentRecentTrans
                totals="0,067"
                propPadding="unset"
                propColor="#111112"
                propTextAlign="right"
              />
              <DesktopComponentRecentTrans
                totals="0,067"
                propPadding="unset"
                propColor="#111112"
                propTextAlign="right"
              />
              <DesktopComponentRecentTrans
                totals="0,067"
                propPadding="unset"
                propColor="#111112"
                propTextAlign="right"
              />
              <DesktopComponentRecentTrans
                totals="0,067"
                propPadding="unset"
                propColor="#3bb167"
                propTextAlign="right"
              />
              <DesktopComponentRecentTrans
                totals="0,067"
                propPadding="unset"
                propColor="#111112"
                propTextAlign="right"
              />
              <DesktopComponentRecentTrans
                totals="0,067"
                propPadding="unset"
                propColor="#3bb167"
                propTextAlign="right"
              />
              <DesktopComponentRecentTrans
                totals="0,067"
                propPadding="unset"
                propColor="#111112"
                propTextAlign="right"
              />
              <DesktopComponentRecentTrans
                totals="0,067"
                propPadding="unset"
                propColor="#111112"
                propTextAlign="right"
              />
              <DesktopComponentRecentTrans
                totals="0,067"
                propPadding="unset"
                propColor="#111112"
                propTextAlign="right"
              />
              <DesktopComponentRecentTrans
                totals="0,067"
                propPadding="unset"
                propColor="#111112"
                propTextAlign="right"
              />
              <DesktopComponentRecentTrans
                totals="0,067"
                propPadding="unset"
                propColor="#111112"
                propTextAlign="right"
              />
              <DesktopComponentRecentTrans
                totals="0,067"
                propPadding="unset"
                propColor="#ef4444"
                propTextAlign="right"
              />
              <DesktopComponentRecentTrans
                totals="0,067"
                propPadding="unset"
                propColor="#111112"
                propTextAlign="right"
              />
              <DesktopComponentRecentTrans
                totals="0,067"
                propPadding="unset"
                propColor="#111112"
                propTextAlign="right"
              />
              <DesktopComponentRecentTrans
                totals="0,067"
                propPadding="unset"
                propColor="#111112"
                propTextAlign="right"
              />
            </div>
            <div className={styles.quantityBtcParent}>
              <div className={styles.priceUsdt}>Totals (BTC)</div>
              <DesktopComponentRecentTrans
                totals="8,356"
                propPadding="0px 3px 0px 0px"
                propColor="#111112"
                propTextAlign="right"
              />
              <DesktopComponentRecentTrans
                totals="8,356"
                propPadding="0px 3px 0px 0px"
                propColor="#111112"
                propTextAlign="right"
              />
              <DesktopComponentRecentTrans
                totals="8,356"
                propPadding="0px 3px 0px 0px"
                propColor="#111112"
                propTextAlign="right"
              />
              <DesktopComponentRecentTrans
                totals="8,356"
                propPadding="0px 3px 0px 0px"
                propColor="#111112"
                propTextAlign="right"
              />
              <DesktopComponentRecentTrans
                totals="8,356"
                propPadding="0px 3px 0px 0px"
                propColor="#111112"
                propTextAlign="right"
              />
              <DesktopComponentRecentTrans
                totals="8,356"
                propPadding="0px 3px 0px 0px"
                propColor="#111112"
                propTextAlign="right"
              />
              <DesktopComponentRecentTrans
                totals="8,356"
                propPadding="0px 3px 0px 0px"
                propColor="#111112"
                propTextAlign="right"
              />
              <DesktopComponentRecentTrans
                totals="8,356"
                propPadding="0px 3px 0px 0px"
                propColor="#111112"
                propTextAlign="right"
              />
              <DesktopComponentRecentTrans
                totals="8,356"
                propPadding="0px 3px 0px 0px"
                propColor="#111112"
                propTextAlign="right"
              />
              <DesktopComponentRecentTrans
                totals="8,356"
                propPadding="0px 3px 0px 0px"
                propColor="#111112"
                propTextAlign="right"
              />
              <DesktopComponentRecentTrans
                totals="8,356"
                propPadding="0px 3px 0px 0px"
                propColor="#111112"
                propTextAlign="right"
              />
              <DesktopComponentRecentTrans
                totals="8,356"
                propPadding="0px 3px 0px 0px"
                propColor="#111112"
                propTextAlign="right"
              />
              <DesktopComponentRecentTrans
                totals="8,356"
                propPadding="0px 3px 0px 0px"
                propColor="#111112"
                propTextAlign="right"
              />
              <DesktopComponentRecentTrans
                totals="8,356"
                propPadding="0px 3px 0px 0px"
                propColor="#111112"
                propTextAlign="right"
              />
              <DesktopComponentRecentTrans totals="8,356" />
            </div>
          </div>
        </div>
        <div className={styles.seeAllButton}>
          <div className={styles.seeAll}>See All</div>
        </div>
      </div>
    </div>
  );
};

export default DesktopRecentTransactions;
