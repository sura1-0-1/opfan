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
import DesktopComponentCurrentPric from "./DesktopComponentCurrentPric";
import styles from "./DesktopLightTradeChart.module.css";

export type DesktopLightTradeChartType = {
  className?: string;
};

const DesktopLightTradeChart: FunctionComponent<DesktopLightTradeChartType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.desktoplightTradeChart, className].join(" ")}>
      <div className={styles.leftInstrumentWrapper}>
        <div className={styles.leftInstrument}>
          <img
            className={styles.rossIcon}
            loading="lazy"
            alt=""
            src="/ross.svg"
          />
          <img className={styles.writingIcon} alt="" src="/writing.svg" />
          <img
            className={styles.writingIcon}
            loading="lazy"
            alt=""
            src="/font.svg"
          />
          <img
            className={styles.writingIcon}
            loading="lazy"
            alt=""
            src="/dynamics.svg"
          />
          <img className={styles.writingIcon} alt="" src="/smile.svg" />
          <img className={styles.writingIcon} alt="" src="/ruler.svg" />
          <img className={styles.writingIcon} alt="" src="/increase.svg" />
          <img className={styles.writingIcon} alt="" src="/show.svg" />
          <img
            className={styles.writingIcon}
            loading="lazy"
            alt=""
            src="/block.svg"
          />
          <img
            className={styles.writingIcon}
            loading="lazy"
            alt=""
            src="/trash.svg"
          />
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.chartAreaParent}>
          <div className={styles.chartArea}>
            <img className={styles.linesIcon} alt="" src="/lines.svg" />
            <img
              className={styles.candlesIcon}
              loading="lazy"
              alt=""
              src="/candles.svg"
            />
          </div>
          <div className={styles.price}>
            <div className={styles.priceLevels}>
              <div className={styles.levelValues}>$0.00933</div>
              <div className={styles.levelValues}>$0.00933</div>
              <div className={styles.levelValues}>$0.00933</div>
              <div className={styles.levelValues}>$0.00933</div>
              <div className={styles.levelValues}>$0.00933</div>
              <div className={styles.levelValues}>$0.00933</div>
              <div className={styles.levelValues}>$0.00933</div>
              <div className={styles.levelValues}>$0.00933</div>
              <DesktopComponentCurrentPric />
            </div>
          </div>
          <div className={styles.topInstrument}>
            <div className={styles.valuesParent}>
              <div className={styles.values}>
                <div className={styles.m}>15m</div>
                <div className={styles.m}>1h</div>
                <div className={styles.h1}>4h</div>
              </div>
              <div className={styles.chartType}>
                <img
                  className={styles.chartCandleIcon}
                  alt=""
                  src="/chart-candle.svg"
                />
                <img
                  className={styles.chartCandleIcon}
                  alt=""
                  src="/chart-linear.svg"
                />
              </div>
              <div className={styles.actions}>
                <TextField
                  className={styles.mathIndicator}
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "4px", marginRight: "8px" }}
                      >
                        <img
                          width="18px"
                          height="18px"
                          src="/math-indicator.svg"
                        />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "4px" }}
                      >
                        <img
                          width="18px"
                          height="18px"
                          src="/short-arrow-2.svg"
                        />
                      </InputAdornment>
                    ),
                  }}
                  SelectProps={{ IconComponent: () => null }}
                  sx={{
                    borderTopWidth: "1px",
                    borderRightWidth: "1px",
                    borderBottomWidth: "1px",
                    borderLeftWidth: "1px",
                    borderRadius: "0px 0px 0px 0px",
                    width: "38.62928348909657%",
                    height: "28px",
                    "& .MuiInput-underline:before": { borderBottom: "none" },
                    "& .MuiInput-underline:after": { borderBottom: "none" },
                    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                      borderBottom: "none",
                    },
                    "& .MuiInputBase-root": { height: "100%" },
                    "& .MuiInputBase-input": {
                      color: "#111112",
                      fontSize: 14,
                      fontWeight: "Medium",
                      fontFamily: "Roboto",
                      textAlign: "left",
                      p: "0 !important",
                    },
                  }}
                >
                  <MenuItem value={1}>Indicators</MenuItem>
                </TextField>
                <div className={styles.actionIcons}>
                  <img className={styles.alertIcon} alt="" src="/alert.svg" />
                  <div className={styles.m}>Alerts</div>
                </div>
                <div className={styles.actionIcons}>
                  <img
                    className={styles.compareIcon}
                    alt=""
                    src="/compare@2x.png"
                  />
                  <div className={styles.m}>Compare</div>
                </div>
              </div>
              <div className={styles.navigation}>
                <div className={styles.chartType}>
                  <img
                    className={styles.chartCandleIcon}
                    alt=""
                    src="/back.svg"
                  />
                  <img
                    className={styles.chartCandleIcon}
                    alt=""
                    src="/next.svg"
                  />
                </div>
                <div className={styles.chartType}>
                  <img
                    className={styles.chartCandleIcon}
                    alt=""
                    src="/screenshot.svg"
                  />
                  <img
                    className={styles.chartCandleIcon}
                    alt=""
                    src="/settings.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.fullscreenContainer}>
              <img className={styles.alertIcon} alt="" src="/full-screen.svg" />
            </div>
          </div>
        </div>
        <div className={styles.time}>
          <div className={styles.timeScale}>
            <div className={styles.timeValues}>00:00</div>
            <div className={styles.timeValues}>03:00</div>
            <div className={styles.timeValues}>07:00</div>
            <div className={styles.timeValues}>11:00</div>
            <div className={styles.timeValues}>14:00</div>
            <div className={styles.timeValues}>18:00</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopLightTradeChart;
