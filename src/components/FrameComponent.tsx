import { FunctionComponent } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import DesktopMenu from "./DesktopMenu";
import DesktopNotificationsButton from "./DesktopNotificationsButton";
import DesktopSearchBar from "./DesktopSearchBar";
import TitleBodyTextInput from "./TitleBodyTextInput";
import DesktopDefault from "./DesktopDefault";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.avatarNameRowParent}>
        <div className={styles.avatarNameRow}>
          <div className={styles.avatarParent}>
            <img
              className={styles.avatarIcon}
              loading="lazy"
              alt=""
              src="/avatar1@2x.png"
            />
            <h1 className={styles.johnJohnson}>John Johnson</h1>
          </div>
        </div>
        <div className={styles.desktopMenuPanelParent}>
          <div className={styles.desktopMenuPanel}>
            <DesktopMenu
              avatar="pending_I1:8227;1666:4125"
              label="John Johnson"
              shortArrow="pending_I1:8227;1666:4127"
            />
            <DesktopNotificationsButton
              notification="pending_I1:8228;1903:11122"
              singleDigits="3"
            />
          </div>
          <DesktopSearchBar />
        </div>
      </div>
      <div className={styles.divider} />
      <div className={styles.email}>
        <TitleBodyTextInput
          titile="Add your email"
          bodyText="This info needs to be accurate with your ID document."
          caption="Email"
          calendar="/icon.svg"
          contentPlaceholder="user@gmail.com"
          shortArrow="/icon.svg"
          rightIcon={false}
          leftIcon={false}
          propFlex="unset"
          propMinWidth="unset"
          propAlignSelf="stretch"
          propWidth="unset"
          propRowGap="unset"
          propOverflow="hidden"
          propMinWidth1="250px"
        />
        <TitleBodyTextInput
          titile="Change email"
          bodyText="The confirmation code has been sent to your new email"
          caption="New Email"
          calendar="/icon.svg"
          contentPlaceholder="user@gmail.com"
          shortArrow="/icon.svg"
          rightIcon={false}
          leftIcon={false}
          propFlex="unset"
          propMinWidth="unset"
          propAlignSelf="stretch"
          propWidth="unset"
          propRowGap="unset"
          propOverflow="hidden"
          propMinWidth1="250px"
        />
      </div>
      <div className={styles.changePassword}>
        <h3 className={styles.titile}>{`Change password `}</h3>
        <div className={styles.currentNewPassword}>
          <DesktopDefault
            rightIcon={false}
            caption="Сurrent password"
            leftIcon={false}
            propFlex="1"
            propMinWidth="372px"
            propAlignSelf="unset"
            propWidth="unset"
            propRowGap="unset"
            calendar="/icon.svg"
            propOverflow="hidden"
            contentPlaceholder="***********"
            propMinWidth1="250px"
            shortArrow="/icon.svg"
          />
          <div className={styles.desktopdefault}>
            <div className={styles.default}>New Password</div>
            <TextField
              className={styles.input}
              placeholder="***********"
              variant="outlined"
              sx={{
                "& fieldset": { borderColor: "#cdd5e9" },
                "& .MuiInputBase-root": {
                  height: "40px",
                  backgroundColor: "#fbfcfe",
                },
                "& .MuiInputBase-input": { color: "#d4d4d4" },
              }}
            />
          </div>
        </div>
      </div>
      <h3 className={styles.titile}>Home Address</h3>
    </div>
  );
};

export default FrameComponent;
