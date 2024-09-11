import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./DesktopTradeCards.module.css";

export type DesktopTradeCardsType = {
  className?: string;
  showEmoji?: boolean;
  fullName?: string;
  price?: string;
  interest?: string;
  shortName?: string;
  urrency?: string;
  favorite?: string;
  cryptocurrency?: string;
  emoji?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propGap?: CSSProperties["gap"];
  propRowGap?: CSSProperties["rowGap"];
  propWidth?: CSSProperties["width"];
  propPadding?: CSSProperties["padding"];
  propFlex?: CSSProperties["flex"];
  propOverflow?: CSSProperties["overflow"];
  propFlex1?: CSSProperties["flex"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propPadding1?: CSSProperties["padding"];
  propFlex2?: CSSProperties["flex"];
  propColor?: CSSProperties["color"];
  propColor1?: CSSProperties["color"];
  propAlignSelf1?: CSSProperties["alignSelf"];
  propColor2?: CSSProperties["color"];
  propColor3?: CSSProperties["color"];
  propColor4?: CSSProperties["color"];
};

const DesktopTradeCards: FunctionComponent<DesktopTradeCardsType> = ({
  className = "",
  showEmoji = false,
  fullName = "Dogecoin",
  price = "6,8",
  interest = "-5,44%",
  shortName = "Doge",
  urrency = "₽",
  propBackgroundColor,
  propGap,
  propRowGap,
  propWidth,
  propPadding,
  favorite,
  propFlex,
  cryptocurrency,
  propOverflow,
  propFlex1,
  propAlignSelf,
  propPadding1,
  propFlex2,
  propColor,
  emoji,
  propColor1,
  propAlignSelf1,
  propColor2,
  propColor3,
  propColor4,
}) => {
  const desktopTradeCardsStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      gap: propGap,
      rowGap: propRowGap,
    };
  }, [propBackgroundColor, propGap, propRowGap]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
    };
  }, [propWidth, propPadding]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const cryptocurrencyIconStyle: CSSProperties = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex1,
    };
  }, [propFlex1]);

  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      padding: propPadding1,
    };
  }, [propAlignSelf, propPadding1]);

  const ethStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex2,
      color: propColor,
    };
  }, [propFlex2, propColor]);

  const ethereumStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
      alignSelf: propAlignSelf1,
    };
  }, [propColor1, propAlignSelf1]);

  const divStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  const div1Style: CSSProperties = useMemo(() => {
    return {
      color: propColor3,
    };
  }, [propColor3]);

  const div2Style: CSSProperties = useMemo(() => {
    return {
      color: propColor4,
    };
  }, [propColor4]);

  return (
    <div
      className={[styles.desktoptradeCards, className].join(" ")}
      style={desktopTradeCardsStyle}
    >
      <div className={styles.favoriteParent} style={frameDivStyle}>
        <img
          className={styles.favoriteIcon}
          loading="lazy"
          alt=""
          src={favorite}
        />
        <div className={styles.cryptocurrencyParent} style={frameDiv1Style}>
          <img
            className={styles.cryptocurrencyIcon}
            loading="lazy"
            alt=""
            src={cryptocurrency}
            style={cryptocurrencyIconStyle}
          />
          <div className={styles.frameParent} style={frameDiv2Style}>
            <div className={styles.ethParent} style={frameDiv3Style}>
              <div className={styles.eth} style={ethStyle}>
                {shortName}
              </div>
              {showEmoji && (
                <img className={styles.emojiIcon} alt="" src={emoji} />
              )}
            </div>
            <div className={styles.ethereum} style={ethereumStyle}>
              {fullName}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.parent}>
          <div className={styles.div} style={divStyle}>
            {urrency}
          </div>
          <div className={styles.div} style={div1Style}>
            {price}
          </div>
        </div>
        <div className={styles.div2} style={div2Style}>
          {interest}
        </div>
      </div>
    </div>
  );
};

export default DesktopTradeCards;
