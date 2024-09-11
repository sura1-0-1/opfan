import { FunctionComponent } from "react";
import DesktopComponentOrderBookB from "./DesktopComponentOrderBookB";
import styles from "./DesktopOrderBook.module.css";

export type DesktopOrderBookType = {
  className?: string;
};

const DesktopOrderBook: FunctionComponent<DesktopOrderBookType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.desktoporderBook, className].join(" ")}>
      <div className={styles.dataListContainer}>
        <div className={styles.dataHeaders}>
          <div className={styles.headerLabels}>
            <div className={styles.priceUsdt}>Price (USDT)</div>
            <DesktopComponentOrderBookB
              totals="36 461,5"
              propBorderRadius="unset"
              propBackgroundColor="unset"
              propPadding="0px 0px 0px 4px"
              propTextAlign="left"
              propColor="#111112"
            />
            <DesktopComponentOrderBookB
              totals="36 461,4"
              propBorderRadius="unset"
              propBackgroundColor="unset"
              propPadding="0px 0px 0px 4px"
              propTextAlign="left"
              propColor="#111112"
            />
            <DesktopComponentOrderBookB
              totals="36 461,3"
              propBorderRadius="unset"
              propBackgroundColor="unset"
              propPadding="0px 0px 0px 4px"
              propTextAlign="left"
              propColor="#111112"
            />
            <DesktopComponentOrderBookB
              totals="36 461,0"
              propBorderRadius="2px 0px 0px 2px"
              propBackgroundColor="rgba(239, 68, 68, 0.2)"
              propPadding="0px 0px 0px 4px"
              propTextAlign="left"
              propColor="#ef4444"
            />
            <DesktopComponentOrderBookB
              totals="36 460,8"
              propBorderRadius="unset"
              propBackgroundColor="unset"
              propPadding="0px 0px 0px 4px"
              propTextAlign="left"
              propColor="#111112"
            />
            <DesktopComponentOrderBookB
              totals="36 460,5"
              propBorderRadius="unset"
              propBackgroundColor="unset"
              propPadding="0px 0px 0px 4px"
              propTextAlign="left"
              propColor="#111112"
            />
            <DesktopComponentOrderBookB
              totals="36 460,4"
              propBorderRadius="2px 0px 0px 2px"
              propBackgroundColor="rgba(239, 68, 68, 0.2)"
              propPadding="0px 0px 0px 4px"
              propTextAlign="left"
              propColor="#ef4444"
            />
            <DesktopComponentOrderBookB
              totals="36 461,5"
              propBorderRadius="unset"
              propBackgroundColor="unset"
              propPadding="0px 0px 0px 4px"
              propTextAlign="left"
              propColor="#111112"
            />
          </div>
          <div className={styles.orderBookQuantity}>
            <div className={styles.priceUsdt}>Quantity (BTC)</div>
            <DesktopComponentOrderBookB
              totals="0,067"
              propBorderRadius="unset"
              propBackgroundColor="unset"
              propPadding="unset"
              propTextAlign="right"
              propColor="#111112"
            />
            <DesktopComponentOrderBookB
              totals="2,351"
              propBorderRadius="unset"
              propBackgroundColor="unset"
              propPadding="unset"
              propTextAlign="right"
              propColor="#111112"
            />
            <DesktopComponentOrderBookB
              totals="1,250"
              propBorderRadius="unset"
              propBackgroundColor="unset"
              propPadding="unset"
              propTextAlign="right"
              propColor="#111112"
            />
            <DesktopComponentOrderBookB
              totals="0,067"
              propBorderRadius="unset"
              propBackgroundColor="rgba(239, 68, 68, 0.2)"
              propPadding="unset"
              propTextAlign="right"
              propColor="#ef4444"
            />
            <DesktopComponentOrderBookB
              totals="0,220"
              propBorderRadius="unset"
              propBackgroundColor="unset"
              propPadding="unset"
              propTextAlign="right"
              propColor="#111112"
            />
            <DesktopComponentOrderBookB
              totals="0,067"
              propBorderRadius="unset"
              propBackgroundColor="unset"
              propPadding="unset"
              propTextAlign="right"
              propColor="#111112"
            />
            <DesktopComponentOrderBookB
              totals="0,147"
              propBorderRadius="unset"
              propBackgroundColor="unset"
              propPadding="unset"
              propTextAlign="right"
              propColor="#111112"
            />
            <DesktopComponentOrderBookB
              totals="0,188"
              propBorderRadius="unset"
              propBackgroundColor="unset"
              propPadding="unset"
              propTextAlign="right"
              propColor="#111112"
            />
          </div>
          <div className={styles.orderBookQuantity}>
            <div className={styles.priceUsdt}>Totals (BTC)</div>
            <DesktopComponentOrderBookB
              totals="8,356"
              propBorderRadius="0px 2px 2px 0px"
              propBackgroundColor="rgba(239, 68, 68, 0.2)"
              propPadding="0px 3px 0px 0px"
              propTextAlign="right"
              propColor="#ef4444"
            />
            <DesktopComponentOrderBookB
              totals="8,286"
              propBorderRadius="unset"
              propBackgroundColor="unset"
              propPadding="0px 3px 0px 0px"
              propTextAlign="right"
              propColor="#111112"
            />
            <DesktopComponentOrderBookB
              totals="5,938"
              propBorderRadius="unset"
              propBackgroundColor="unset"
              propPadding="0px 3px 0px 0px"
              propTextAlign="right"
              propColor="#111112"
            />
            <DesktopComponentOrderBookB
              totals="4,688"
              propBorderRadius="0px 2px 2px 0px"
              propBackgroundColor="rgba(239, 68, 68, 0.2)"
              propPadding="0px 3px 0px 0px"
              propTextAlign="right"
              propColor="#ef4444"
            />
            <DesktopComponentOrderBookB
              totals="4,621"
              propBorderRadius="unset"
              propBackgroundColor="unset"
              propPadding="0px 3px 0px 0px"
              propTextAlign="right"
              propColor="#111112"
            />
            <DesktopComponentOrderBookB
              totals="4,401"
              propBorderRadius="unset"
              propBackgroundColor="unset"
              propPadding="0px 3px 0px 0px"
              propTextAlign="right"
              propColor="#111112"
            />
            <DesktopComponentOrderBookB
              totals="4,333"
              propBorderRadius="0px 2px 2px 0px"
              propBackgroundColor="rgba(239, 68, 68, 0.2)"
              propPadding="0px 3px 0px 0px"
              propTextAlign="right"
              propColor="#ef4444"
            />
            <DesktopComponentOrderBookB
              totals="4,186"
              propBorderRadius="unset"
              propBackgroundColor="unset"
              propPadding="0px 3px 0px 0px"
              propTextAlign="right"
              propColor="#111112"
            />
          </div>
        </div>
      </div>
      <div className={styles.priceTicker}>
        <div className={styles.currentPrice}>
          <div className={styles.priceMovement}>36 453,9</div>
          <img className={styles.longArrowIcon} alt="" src="/long-arrow.svg" />
        </div>
        <div className={styles.priceValue}>
          <div className={styles.div}>₽</div>
          <div className={styles.priceAmount}>3 425 524,0</div>
        </div>
      </div>
      <div className={styles.orderBookWidget}>
        <div className={styles.dataListContainer}>
          <div className={styles.dataHeaders}>
            <div className={styles.orderBookQuantity}>
              <DesktopComponentOrderBookB
                totals="36 453,8"
                propBorderRadius="unset"
                propBackgroundColor="unset"
                propPadding="0px 0px 0px 4px"
                propTextAlign="left"
                propColor="#111112"
              />
              <DesktopComponentOrderBookB
                totals="36 453,3"
                propBorderRadius="2px 0px 0px 2px"
                propBackgroundColor="rgba(74, 222, 128, 0.2)"
                propPadding="0px 0px 0px 4px"
                propTextAlign="left"
                propColor="#3bb167"
              />
              <DesktopComponentOrderBookB
                totals="36 453,3"
                propBorderRadius="unset"
                propBackgroundColor="unset"
                propPadding="0px 0px 0px 4px"
                propTextAlign="left"
                propColor="#111112"
              />
              <DesktopComponentOrderBookB
                totals="36 453,0"
                propBorderRadius="unset"
                propBackgroundColor="unset"
                propPadding="0px 0px 0px 4px"
                propTextAlign="left"
                propColor="#111112"
              />
              <DesktopComponentOrderBookB
                totals="36 452,4"
                propBorderRadius="2px 0px 0px 2px"
                propBackgroundColor="rgba(74, 222, 128, 0.2)"
                propPadding="0px 0px 0px 4px"
                propTextAlign="left"
                propColor="#3bb167"
              />
              <DesktopComponentOrderBookB
                totals="36 452,1"
                propBorderRadius="unset"
                propBackgroundColor="unset"
                propPadding="0px 0px 0px 4px"
                propTextAlign="left"
                propColor="#111112"
              />
            </div>
            <div className={styles.orderBookQuantity}>
              <DesktopComponentOrderBookB
                totals="0,002"
                propBorderRadius="unset"
                propBackgroundColor="unset"
                propPadding="unset"
                propTextAlign="right"
                propColor="#111112"
              />
              <DesktopComponentOrderBookB
                totals="0,196"
                propBorderRadius="unset"
                propBackgroundColor="unset"
                propPadding="unset"
                propTextAlign="right"
                propColor="#111112"
              />
              <DesktopComponentOrderBookB
                totals="0,001"
                propBorderRadius="unset"
                propBackgroundColor="unset"
                propPadding="unset"
                propTextAlign="right"
                propColor="#111112"
              />
              <DesktopComponentOrderBookB
                totals="0,133"
                propBorderRadius="unset"
                propBackgroundColor="unset"
                propPadding="unset"
                propTextAlign="right"
                propColor="#111112"
              />
              <DesktopComponentOrderBookB
                totals="0,001"
                propBorderRadius="unset"
                propBackgroundColor="rgba(74, 222, 128, 0.2)"
                propPadding="unset"
                propTextAlign="right"
                propColor="#3bb167"
              />
              <DesktopComponentOrderBookB
                totals="0,122"
                propBorderRadius="unset"
                propBackgroundColor="unset"
                propPadding="unset"
                propTextAlign="right"
                propColor="#111112"
              />
            </div>
            <div className={styles.orderBookQuantity}>
              <DesktopComponentOrderBookB
                totals="0,002"
                propBorderRadius="unset"
                propBackgroundColor="unset"
                propPadding="0px 3px 0px 0px"
                propTextAlign="right"
                propColor="#111112"
              />
              <DesktopComponentOrderBookB
                totals="0,199"
                propBorderRadius="unset"
                propBackgroundColor="unset"
                propPadding="0px 3px 0px 0px"
                propTextAlign="right"
                propColor="#111112"
              />
              <DesktopComponentOrderBookB
                totals="0,201"
                propBorderRadius="0px 2px 2px 0px"
                propBackgroundColor="rgba(74, 222, 128, 0.2)"
                propPadding="0px 3px 0px 0px"
                propTextAlign="right"
                propColor="#3bb167"
              />
              <DesktopComponentOrderBookB
                totals="0,334"
                propBorderRadius="unset"
                propBackgroundColor="unset"
                propPadding="0px 3px 0px 0px"
                propTextAlign="right"
                propColor="#111112"
              />
              <DesktopComponentOrderBookB
                totals="0,377"
                propBorderRadius="0px 2px 2px 0px"
                propBackgroundColor="rgba(74, 222, 128, 0.2)"
                propPadding="0px 3px 0px 0px"
                propTextAlign="right"
                propColor="#3bb167"
              />
              <DesktopComponentOrderBookB totals="0,500" />
            </div>
          </div>
        </div>
        <div className={styles.orderBookAllButton}>
          <div className={styles.seeAll}>See All</div>
        </div>
      </div>
    </div>
  );
};

export default DesktopOrderBook;
