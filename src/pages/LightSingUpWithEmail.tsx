import { FunctionComponent } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import DesktopProgressBar from "../components/DesktopProgressBar";
import styles from "./LightSingUpWithEmail.module.css";

const LightSingUpWithEmail: FunctionComponent = () => {
  return (
    <div className={styles.lightSingUpWithEmail}>
      <img className={styles.leftContent} loading="lazy" alt="" />
      <div className={styles.signUpSwitcherParent}>
        <div className={styles.signUpSwitcherParentInner}>
          <FrameComponent1 />
        </div>
        <DesktopProgressBar />
      </div>
    </div>
  );
};

export default LightSingUpWithEmail;
