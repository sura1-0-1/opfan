import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Button } from "@mui/material";
import styles from "./DesktopPrimary.module.css";

export type DesktopPrimaryType = {
  className?: string;
  desktopPrimary?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
};

const DesktopPrimary: FunctionComponent<DesktopPrimaryType> = ({
  className = "",
  desktopPrimary,
  propWidth,
  propAlignSelf,
}) => {
  const desktopPrimaryStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  return (
    <Button
      className={[styles.desktopprimary, className].join(" ")}
      disableElevation
      variant="contained"
      sx={{
        textTransform: "none",
        color: "#f2f4f7",
        fontSize: "16",
        background: "#613de4",
        borderRadius: "4px",
        "&:hover": { background: "#613de4" },
        width: 89,
        height: 40,
      }}
      style={desktopPrimaryStyle}
    >
      {desktopPrimary}
    </Button>
  );
};

export default DesktopPrimary;
