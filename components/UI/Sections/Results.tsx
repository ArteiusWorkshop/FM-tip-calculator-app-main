import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { CalculatorContext } from "../../../Context/Calculator";
import { useContext } from "react";
import { useRouter } from "next/router";

export const Results = () => {
  const handleClick = () => {
    router.reload();
    reset;
  };

  const router = useRouter();
  const { tip, bill, people, tipAmount, total, reset } =
    useContext(CalculatorContext);
  return (
    <Box className="result">
      <Box className="result-tip-amount">
        <Box textAlign="left">
          <Typography className="ta">Tip Amount</Typography>
          <Typography className="ts">/ person</Typography>
        </Box>
        <Box textAlign="right">
          <Typography className="tr">
            $
            {isNaN(Number(tipAmount))
              ? "0.00"
              : !isFinite(Number(tipAmount))
              ? "0.00"
              : tipAmount == ""
              ? "0.00"
              : tipAmount}
          </Typography>
        </Box>
      </Box>

      <Box className="result-tip-amount">
        <Box textAlign="left">
          <Typography className="ta">Total</Typography>
          <Typography className="ts">/ person</Typography>
        </Box>
        <Box textAlign="right">
          <Typography className="tr">
            $
            {isNaN(Number(total))
              ? "0.00"
              : !isFinite(Number(total))
              ? "0.00"
              : total == ""
              ? "0.00"
              : total}
          </Typography>
        </Box>
      </Box>
      <Button
        variant="contained"
        fullWidth
        onClick={handleClick}
        disabled={
          bill != 0 ? false : people != 0 ? false : tip != 0 ? false : true
        }
      >
        Reset
      </Button>
    </Box>
  );
};
