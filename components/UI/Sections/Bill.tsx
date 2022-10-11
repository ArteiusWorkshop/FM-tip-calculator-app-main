import {
  Box,
  FormControl,
  Input,
  InputAdornment,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useContext, useEffect } from "react";
import { CalculatorContext } from "../../../Context/Calculator";

export const Bill = () => {
  const { bill, people, tip, setBill, setTotal, setTipAmount } =
    useContext(CalculatorContext);

  const handleClick = (e: any) => {
    setBill(Number(e.target.value));
  };

  useEffect(() => {
    setTipAmount(bill, people, tip);
    setTotal(bill, people, tip);
  }, [bill]);

  return (
    <Box className="bill">
      <Typography className="form-title">Bill</Typography>
      <FormControl fullWidth variant="standard">
        <Input
          type="number"
          placeholder="0"
          inputProps={{
            style: { textAlign: "right" },
          }}
          disableUnderline
          startAdornment={
            <InputAdornment position="start">
              <Image src="/img/icon-dollar.svg" width="11" height="17" />
            </InputAdornment>
          }
          onChange={(e) => handleClick(e)}
        />
      </FormControl>
    </Box>
  );
};
