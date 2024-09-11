import { FunctionComponent } from "react";
import MarketData from "./MarketData";
import styles from "./RightLight.module.css";

export type RightLightType = {
  className?: string;
};

const RightLight: FunctionComponent<RightLightType> = ({ className = "" }) => {
  return (
    <div className={[styles.rightlight, className].join(" ")}>
      <MarketData />
    </div>
  );
};

export default RightLight;
