import { FunctionComponent } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  TextField,
} from "@mui/material";
import styles from "./DesktopHeaderTradeTable.module.css";

export type DesktopHeaderTradeTableType = {
  className?: string;
};

const DesktopHeaderTradeTable: FunctionComponent<
  DesktopHeaderTradeTableType
> = ({ className = "" }) => {
  return (
    <div className={[styles.desktopheaderTradeTable, className].join(" ")}>
      <TextField
        className={styles.currency}
        variant="standard"
        select
        value={1}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" style={{ marginRight: "8px" }}>
              <img width="40px" height="40px" src="/cryptocurrency-8.svg" />
            </InputAdornment>
          ),
          endAdornment: (
            <img width="24px" height="24px" src="/short-arrow-1.svg" />
          ),
        }}
        SelectProps={{ IconComponent: () => null }}
        sx={{
          borderTopWidth: "1px",
          borderRightWidth: "1px",
          borderBottomWidth: "1px",
          borderLeftWidth: "1px",
          borderRadius: "0px 0px 0px 0px",
          width: "26.31578947368421%",
          height: "40px",
          "& .MuiInput-underline:before": { borderBottom: "none" },
          "& .MuiInput-underline:after": { borderBottom: "none" },
          "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
            borderBottom: "none",
          },
          "& .MuiInputBase-root": { height: "100%" },
          "& .MuiInputBase-input": {
            color: "#111112",
            fontSize: 24,
            fontWeight: "Medium",
            fontFamily: "Roboto",
            textAlign: "left",
            p: "0 !important",
          },
        }}
      >
        <MenuItem value={1}>Btc/usdt</MenuItem>
      </TextField>
      <div className={styles.tabs}>
        <div className={styles.placeholderContainer}>
          <a className={styles.space}>36 453,9</a>
          <a className={styles.placeholder}>+3.12%</a>
        </div>
        <nav className={styles.metrics}>
          <div className={styles.rub}>
            <div className={styles.rub1}>Rub</div>
            <div className={styles.currencyValues}>
              <div className={styles.div}>₽</div>
              <a className={styles.valuesSpace}>3 425 524</a>
            </div>
          </div>
          <div className={styles.rub}>
            <div className={styles.min24h}>Min (24h)</div>
            <div className={styles.parent}>
              <div className={styles.div}>₽</div>
              <div className={styles.div2}>35 351</div>
            </div>
          </div>
          <div className={styles.rub}>
            <div className={styles.min24h}>Max (24h)</div>
            <div className={styles.group}>
              <div className={styles.div}>₽</div>
              <a className={styles.valuesSpace}>38 028,0</a>
            </div>
          </div>
          <div className={styles.volume}>
            <div className={styles.volume24h}>Volume (24h)</div>
            <div className={styles.container}>
              <div className={styles.div}>₽</div>
              <div className={styles.div2}>37 453,0</div>
            </div>
          </div>
          <div className={styles.return}>
            <div className={styles.volume24h}>Return (24h)</div>
            <div className={styles.percentage}>
              <div className={styles.b}>1 38B</div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default DesktopHeaderTradeTable;
