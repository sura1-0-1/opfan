import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./SocialButton.module.css";

export type SocialButtonType = {
  className?: string;
  socialButton?: string;
};

const SocialButton: FunctionComponent<SocialButtonType> = ({
  className = "",
  socialButton,
}) => {
  return (
    <Button
      className={[styles.socialButton, className].join(" ")}
      startIcon={<img width="24px" height="24px" src="/apple.svg" />}
      disableElevation
      variant="contained"
      sx={{
        textTransform: "none",
        color: "#111112",
        fontSize: "16",
        background: "#f5f7fc",
        borderRadius: "4px",
        "&:hover": { background: "#f5f7fc" },
        height: 40,
      }}
    >
      {socialButton}
    </Button>
  );
};

export default SocialButton;
