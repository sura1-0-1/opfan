import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import DesktopComponentSingInSi from "./DesktopComponentSingInSi";
import DesktopEmail from "./DesktopEmail";
import DesktopPassword from "./DesktopPassword";
import DesktopCheckbox from "./DesktopCheckbox";
import DesktopPrimary from "./DesktopPrimary";
import SocialButton from "./SocialButton";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <form className={[styles.instanceParentParent, className].join(" ")}>
      <div className={styles.instanceParent}>
        <div className={styles.desktoplightSingInSingU}>
          <DesktopComponentSingInSi
            propHeight="36px"
            labelText="Sing In"
            propHeight1="37px"
            propTextDecoration="unset"
          />
          <Button
            className={styles.desktopcomponentsingInSi}
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#613de4",
              border: "#613de4 solid 1px",
              borderRadius: "0px 2px 2px 0px",
              "&:hover": { background: "#613de4" },
              height: 36,
            }}
          >
            Sign Up
          </Button>
        </div>
      </div>
      <div className={styles.inputContent}>
        <h1 className={styles.titile}>Get Started Now</h1>
        <DesktopEmail singUpSingInText="Sing Up with Phone Number" />
        <DesktopPassword forgotText={false} propWidth="103px" />
        <div className={styles.checkboxParent}>
          <DesktopCheckbox />
          <div className={styles.iAgreeToTheTermsPolicyWrapper}>
            <div
              className={styles.iAgreeTo}
            >{`I agree to the terms & policy`}</div>
          </div>
        </div>
        <DesktopPrimary
          desktopPrimary="Sign Up"
          propWidth="unset"
          propAlignSelf="stretch"
        />
      </div>
      <div className={styles.inputContent}>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameChild} />
          </div>
          <div className={styles.inputText}>or</div>
          <div className={styles.frameWrapper}>
            <div className={styles.frameChild} />
          </div>
        </div>
        <SocialButton socialButton="Sign in with Google" />
        <SocialButton socialButton="Sign in with Apple" />
      </div>
    </form>
  );
};

export default FrameComponent1;
