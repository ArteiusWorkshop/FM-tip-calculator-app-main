import {
  Button,
  FormControl,
  Grid,
  Input,
  InputAdornment,
} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useContext, useEffect } from "react";
import { CalculatorContext } from "../../../Context/Calculator";

export const Tip = () => {
  const { bill, people, tip, tipStyle, setTip, setTotal, setTipAmount } =
    useContext(CalculatorContext);

  const handleClick = (num: number, txt: string) => {
    setTip(num, txt);
  };

  useEffect(() => {
    setTipAmount(bill, people, tip);
    setTotal(bill, people, tip);
  }, [tip]);

  return (
    <Box className="tip">
      <Typography className="form-title">Select Tip %</Typography>
      <Box paddingTop={2}>
        <Grid container spacing={2} wrap="wrap">
          <Grid
            item
            xs={6}
            sm={4}
            className={tipStyle == "five" ? tipStyle : ""}
          >
            <Button
              variant="contained"
              fullWidth
              onClick={() => handleClick(5, "five")}
              className="aaa"
            >
              5%
            </Button>
          </Grid>
          <Grid
            item
            xs={6}
            sm={4}
            className={tipStyle == "ten" ? tipStyle : ""}
          >
            <Button
              variant="contained"
              fullWidth
              onClick={() => handleClick(10, "ten")}
            >
              10%
            </Button>
          </Grid>
          <Grid
            item
            xs={6}
            sm={4}
            className={tipStyle == "fifteen" ? tipStyle : ""}
          >
            <Button
              variant="contained"
              fullWidth
              onClick={() => handleClick(15, "fifteen")}
            >
              15%
            </Button>
          </Grid>
          <Grid
            item
            xs={6}
            sm={4}
            className={tipStyle == "twentyfive" ? tipStyle : ""}
          >
            <Button
              variant="contained"
              fullWidth
              onClick={() => handleClick(25, "twentyfive")}
            >
              25%
            </Button>
          </Grid>
          <Grid
            item
            xs={6}
            sm={4}
            className={tipStyle == "fifty" ? tipStyle : ""}
          >
            <Button
              variant="contained"
              fullWidth
              onClick={() => handleClick(50, "fifty")}
            >
              50%
            </Button>
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth variant="standard">
              <Input
                inputProps={{
                  style: { textAlign: "right" },
                }}
                endAdornment={
                  <InputAdornment position="end" sx={{ fontSize: "20px" }}>
                    %
                  </InputAdornment>
                }
                disableUnderline
                placeholder="Custom"
                onClick={(e) =>
                  setTip(Number(e.target.addEventListener), "custom")
                }
                onChange={(e) => setTip(Number(e.target.value), "custom")}
              />
            </FormControl>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
