import { FunctionComponent } from "react";
import LeftContent from "../components/LeftContent";
import ButtonContainer from "../components/ButtonContainer";
import DesktopProgressBar from "../components/DesktopProgressBar";
import styles from "./LightSingInWithPhoneNum.module.css";

const LightSingInWithPhoneNum: FunctionComponent = () => {
  return (
    <div className={styles.lightSingInWithPhoneNum}>
      <LeftContent />
      <div className={styles.right}>
        <div className={styles.buttonContainerWrapper}>
          <ButtonContainer />
        </div>
        <DesktopProgressBar />
      </div>
    </div>
  );
};

export default LightSingInWithPhoneNum;
