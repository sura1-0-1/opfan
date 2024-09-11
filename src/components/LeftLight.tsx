import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import DesktopSearchBar from "./DesktopSearchBar";
import DesktopComponentItemTradeT from "./DesktopComponentItemTradeT";
import DesktopTradeCards from "./DesktopTradeCards";
import styles from "./LeftLight.module.css";

export type LeftLightType = {
  className?: string;
};

const LeftLight: FunctionComponent<LeftLightType> = ({ className = "" }) => {
  return (
    <div className={[styles.leftlight, className].join(" ")}>
      <form className={styles.frameParent}>
        <div className={styles.logoParent}>
          <img
            className={styles.logoIcon}
            loading="lazy"
            alt=""
            src="/logo.svg"
          />
          <div className={styles.marketsParent}>
            <a className={styles.markets}>Markets</a>
            <DesktopSearchBar />
          </div>
        </div>
        <div className={styles.marketsParent}>
          <div className={styles.desktoptradeTabs}>
            <DesktopComponentItemTradeT
              text="All"
              propBorderBottom="2px solid #cdd5e9"
              propBackgroundColor="unset"
              propFlex="unset"
              propMinWidth="unset"
              propWidth="unset"
              propColor="#111112"
              propFlex1="unset"
            />
            <Button
              className={styles.desktopcomponentitemTradeT}
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#613de4",
                fontSize: "14",
                background: "#f5f7fc",
                borderColor: "#613de4",
                borderWidth: "0px 0px 2px 0px",
                borderStyle: "solid",
                borderRadius: "4px 4px 0px 0px",
                "&:hover": { background: "#f5f7fc" },
                width: 146,
                height: 40,
              }}
            >
              Сryptocurrency
            </Button>
            <Button
              className={styles.desktopcomponentitemTradeT1}
              disableElevation
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#111112",
                fontSize: "14",
                borderColor: "#cdd5e9",
                borderRadius: "4px 4px 0px 0px",
                "&:hover": { borderColor: "#cdd5e9" },
                width: 107,
                height: 40,
              }}
            >
              Favorites
            </Button>
            <DesktopComponentItemTradeT
              text="Levels"
              propBorderBottom="2px solid #cdd5e9"
              propBackgroundColor="unset"
              propFlex="unset"
              propMinWidth="unset"
              propWidth="89px"
              propColor="#111112"
              propFlex1="1"
            />
            <div className={styles.iconButton}>
              <img
                className={styles.shortArrowIcon}
                loading="lazy"
                alt=""
                src="/short-arrow.svg"
              />
            </div>
          </div>
          <div className={styles.desktopTradeCards}>
            <DesktopTradeCards
              showEmoji
              fullName="Bitcoin"
              price="3 425 524,0"
              interest="+3,25%"
              shortName="Btc"
              urrency="₽"
              propBackgroundColor="#613de4"
              propGap="20px"
              propRowGap="unset"
              propWidth="133px"
              propPadding="unset"
              favorite="/favorite.svg"
              propFlex="1"
              cryptocurrency="/cryptocurrency.svg"
              propOverflow="hidden"
              propFlex1="1"
              propAlignSelf="unset"
              propPadding1="unset"
              propFlex2="unset"
              propColor="#fff"
              emoji="/emoji.svg"
              propColor1="#fff"
              propAlignSelf1="stretch"
              propColor2="#fff"
              propColor3="#fff"
              propColor4="#3bb167"
            />
            <DesktopTradeCards
              showEmoji
              fullName="Ethereum"
              price="189 584,7"
              interest="+6,66%"
              shortName="Eth"
              urrency="₽"
              propBackgroundColor="unset"
              propGap="20px"
              propRowGap="unset"
              propWidth="unset"
              propPadding="unset"
              favorite="/favorite.svg"
              propFlex="unset"
              cryptocurrency="/cryptocurrency-1@2x.png"
              propOverflow="unset"
              propFlex1="unset"
              propAlignSelf="unset"
              propPadding1="0px 8px 0px 0px"
              propFlex2="unset"
              propColor="#111112"
              emoji="/emoji.svg"
              propColor1="#111112"
              propAlignSelf1="unset"
              propColor2="#111112"
              propColor3="#111112"
              propColor4="#3bb167"
            />
            <DesktopTradeCards
              showEmoji={false}
              fullName="Myriad"
              price="0,006455"
              interest="-0.01%"
              shortName="Xmy"
              urrency="₽"
              propBackgroundColor="unset"
              propGap="20px"
              propRowGap="unset"
              propWidth="124px"
              propPadding="unset"
              favorite="/favorite-2.svg"
              propFlex="1"
              cryptocurrency="/cryptocurrency-2.svg"
              propOverflow="hidden"
              propFlex1="1"
              propAlignSelf="stretch"
              propPadding1="unset"
              propFlex2="1"
              propColor="#111112"
              emoji="/emoji.svg"
              propColor1="#111112"
              propAlignSelf1="unset"
              propColor2="#111112"
              propColor3="#111112"
              propColor4="#ef4444"
            />
            <DesktopTradeCards
              showEmoji={false}
              fullName="Litecoin"
              price="6 700,1"
              interest="-2,99%"
              shortName="ltc"
              urrency="₽"
              propBackgroundColor="unset"
              propGap="20px"
              propRowGap="unset"
              propWidth="132px"
              propPadding="unset"
              favorite="/favorite.svg"
              propFlex="1"
              cryptocurrency="/cryptocurrency-3.svg"
              propOverflow="hidden"
              propFlex1="1"
              propAlignSelf="stretch"
              propPadding1="unset"
              propFlex2="1"
              propColor="#111112"
              emoji="/emoji.svg"
              propColor1="#111112"
              propAlignSelf1="unset"
              propColor2="#111112"
              propColor3="#111112"
              propColor4="#ef4444"
            />
            <DesktopTradeCards
              showEmoji
              fullName="Ripple"
              price="61,9"
              interest="-4,31%"
              shortName="Xrp"
              urrency="₽"
              propBackgroundColor="unset"
              propGap="0px"
              propRowGap="20px"
              propWidth="219px"
              propPadding="0px 77px 0px 0px"
              favorite="/favorite.svg"
              propFlex="1"
              cryptocurrency="/cryptocurrency-4.svg"
              propOverflow="hidden"
              propFlex1="1"
              propAlignSelf="stretch"
              propPadding1="unset"
              propFlex2="1"
              propColor="#111112"
              emoji="/emoji.svg"
              propColor1="#111112"
              propAlignSelf1="stretch"
              propColor2="#111112"
              propColor3="#111112"
              propColor4="#ef4444"
            />
            <DesktopTradeCards
              showEmoji
              fullName="Bitcoin Cash"
              price="22 063,5"
              interest="-3,56%"
              shortName="Bch"
              urrency="₽"
              propBackgroundColor="unset"
              propGap="20px"
              propRowGap="unset"
              propWidth="unset"
              propPadding="unset"
              favorite="/favorite.svg"
              propFlex="unset"
              cryptocurrency="/cryptocurrency-5.svg"
              propOverflow="hidden"
              propFlex1="unset"
              propAlignSelf="unset"
              propPadding1="0px 26px 0px 0px"
              propFlex2="unset"
              propColor="#111112"
              emoji="/emoji.svg"
              propColor1="#111112"
              propAlignSelf1="unset"
              propColor2="#111112"
              propColor3="#111112"
              propColor4="#ef4444"
            />
            <DesktopTradeCards
              showEmoji={false}
              fullName="Polygon"
              price="76,0"
              interest="+1,77%"
              shortName="matic"
              urrency="₽"
              propBackgroundColor="unset"
              propGap="20px"
              propRowGap="unset"
              propWidth="unset"
              propPadding="unset"
              favorite="/favorite-2.svg"
              propFlex="unset"
              cryptocurrency="/cryptocurrency-6.svg"
              propOverflow="hidden"
              propFlex1="unset"
              propAlignSelf="unset"
              propPadding1="unset"
              propFlex2="unset"
              propColor="#111112"
              emoji="/emoji.svg"
              propColor1="#111112"
              propAlignSelf1="unset"
              propColor2="#111112"
              propColor3="#111112"
              propColor4="#3bb167"
            />
            <DesktopTradeCards
              showEmoji
              fullName="Dogecoin"
              price="6,8"
              interest="-5,44%"
              shortName="Doge"
              urrency="₽"
              favorite="/favorite-2.svg"
              cryptocurrency="/cryptocurrency-7.svg"
              emoji="/emoji.svg"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default LeftLight;
