import { FunctionComponent, useState } from "react";
import { TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import NavigationDrawer from "../components/NavigationDrawer";
import FrameComponent from "../components/FrameComponent";
import DesktopDefault from "../components/DesktopDefault";
import DesktopSecondary from "../components/DesktopSecondary";
import DesktopPrimary from "../components/DesktopPrimary";
import styles from "./LightAccountSetupNotFill.module.css";

const LightAccountSetupNotFill: FunctionComponent = () => {
  const [
    desktopDefaultDateTimePickerValue,
    setDesktopDefaultDateTimePickerValue,
  ] = useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={styles.lightAccountSetupNotFill}>
        <NavigationDrawer />
        <main className={styles.userPanelWrapper}>
          <form className={styles.userPanel}>
            <FrameComponent />
            <div className={styles.addressPanelParent}>
              <div className={styles.addressPanel}>
                <div className={styles.addressLinePostcodeCity}>
                  <div className={styles.desktopdefaultParent}>
                    <DesktopDefault
                      rightIcon={false}
                      caption="Address Line"
                      leftIcon={false}
                      propFlex="1"
                      propMinWidth="248px"
                      propAlignSelf="unset"
                      propWidth="unset"
                      propRowGap="unset"
                      calendar="/icon.svg"
                      propOverflow="hidden"
                      contentPlaceholder="House number and street name"
                      propMinWidth1="220px"
                      shortArrow="/icon.svg"
                    />
                    <DesktopDefault
                      rightIcon={false}
                      caption="Postcode"
                      leftIcon={false}
                      propFlex="unset"
                      propMinWidth="unset"
                      propAlignSelf="unset"
                      propWidth="175px"
                      propRowGap="unset"
                      calendar="/icon.svg"
                      propOverflow="hidden"
                      contentPlaceholder="Ex: 0000"
                      propMinWidth1="95px"
                      shortArrow="/icon.svg"
                    />
                  </div>
                  <DesktopDefault
                    rightIcon={false}
                    caption="City"
                    leftIcon={false}
                    propFlex="unset"
                    propMinWidth="unset"
                    propAlignSelf="stretch"
                    propWidth="unset"
                    propRowGap="unset"
                    calendar="/icon.svg"
                    propOverflow="hidden"
                    contentPlaceholder="City, State"
                    propMinWidth1="250px"
                    shortArrow="/icon.svg"
                  />
                </div>
                <div className={styles.desktopdefault}>
                  <DatePicker
                    value={desktopDefaultDateTimePickerValue}
                    onChange={(newValue: any) => {
                      setDesktopDefaultDateTimePickerValue(newValue);
                    }}
                    sx={{
                      fieldset: {
                        borderColor: "transparent",
                        borderTopWidth: 1,
                        borderRightWidth: 1,
                        borderBottomWidth: 1,
                        borderLeftWidth: 1,
                      },
                      "&:hover": {
                        fieldset: { borderColor: "transparent" },
                        ".MuiOutlinedInput-notchedOutline": {
                          borderColor: "transparent",
                        },
                      },
                      "& input::placeholder": {
                        textColor: "#d4d4d4",
                        fontSize: 16,
                      },
                      input: {
                        color: "#d4d4d4",
                        fontSize: 16,
                        textAlign: "left",
                        fontWeight: "400",
                      },
                      "& .MuiInputBase-root": {
                        height: 60,
                        gap: "8px",
                        flexDirection: { flexDirection: "row" },
                      },
                    }}
                    slotProps={{
                      textField: {
                        size: "medium",
                        fullWidth: true,
                        required: false,
                        autoFocus: false,
                        error: false,
                        placeholder: "USA",
                      },
                      openPickerIcon: {
                        component: () => <></>,
                      },
                    }}
                    label="Country of residence"
                  />
                </div>
              </div>
              <div className={styles.personalInfo}>
                <h3 className={styles.titile}>Add your personal info</h3>
                <div className={styles.addressPanel}>
                  <div className={styles.addressLinePostcodeCity}>
                    <DesktopDefault
                      rightIcon={false}
                      caption="Full Name"
                      leftIcon={false}
                      propFlex="unset"
                      propMinWidth="unset"
                      propAlignSelf="stretch"
                      propWidth="unset"
                      propRowGap="unset"
                      calendar="/icon.svg"
                      propOverflow="hidden"
                      contentPlaceholder="Mr. John Doe"
                      propMinWidth1="250px"
                      shortArrow="/icon.svg"
                    />
                    <DesktopDefault
                      rightIcon={false}
                      caption="Username"
                      leftIcon
                      propFlex="unset"
                      propMinWidth="unset"
                      propAlignSelf="stretch"
                      propWidth="unset"
                      propRowGap="20px"
                      calendar="/.svg"
                      propOverflow="unset"
                      contentPlaceholder="@username"
                      propMinWidth1="300px"
                      shortArrow="/icon.svg"
                    />
                  </div>
                  <DesktopDefault
                    rightIcon={false}
                    caption="Date Of Birth"
                    leftIcon
                    calendar="/calendar.svg"
                    contentPlaceholder="MM/DD/YYYY"
                    shortArrow="pending_I1:8198;2050:25472"
                  />
                </div>
              </div>
            </div>
            <div className={styles.btns}>
              <DesktopSecondary />
              <DesktopPrimary desktopPrimary="Apply" />
            </div>
          </form>
        </main>
      </div>
    </LocalizationProvider>
  );
};

export default LightAccountSetupNotFill;
