import { FunctionComponent } from "react";
import DesktopLightSingInSingU from "./DesktopLightSingInSingU";
import DesktopNumber from "./DesktopNumber";
import DesktopPassword from "./DesktopPassword";
import DesktopPrimary from "./DesktopPrimary";
import SocialButton from "./SocialButton";
import styles from "./ButtonContainer.module.css";

export type ButtonContainerType = {
  className?: string;
};

const ButtonContainer: FunctionComponent<ButtonContainerType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.buttonContainer, className].join(" ")}>
      <div className={styles.desktoplightSingInSingUWrapper}>
        <DesktopLightSingInSingU />
      </div>
      <div className={styles.titileParent}>
        <h1 className={styles.titile}>Welcome Back</h1>
        <div className={styles.titileGroup}>
          <div className={styles.titile1}>
            Enter your Credentials to access your account
          </div>
          <DesktopNumber />
        </div>
      </div>
      <DesktopPassword forgotText />
      <DesktopPrimary
        desktopPrimary="Sign In"
        propWidth="unset"
        propAlignSelf="stretch"
      />
      <div className={styles.forgotPasswordContainerParent}>
        <div className={styles.forgotPasswordContainer}>
          <div className={styles.forgotPasswordInner} />
        </div>
        <div className={styles.inputText}>or</div>
        <div className={styles.forgotPasswordContainer}>
          <div className={styles.forgotPasswordInner} />
        </div>
      </div>
      <SocialButton socialButton="Sign in with Google" />
      <SocialButton socialButton="Sign in with Apple" />
    </div>
  );
};

export default ButtonContainer;
