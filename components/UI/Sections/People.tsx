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

export const People = () => {
  const { bill, people, tip, setPeople, setTotal, setTipAmount } =
    useContext(CalculatorContext);

  const handleClick = (e: any) => {
    setPeople(Number(e.target.value));
  };

  useEffect(() => {
    setTipAmount(bill, people, tip);
    setTotal(bill, people, tip);
  }, [people]);

  return (
    <Box className="people">
      <Typography className="form-title">Number of People</Typography>
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
              <Image src="/img/icon-person.svg" width="13" height="16" />
            </InputAdornment>
          }
          onChange={(e) => handleClick(e)}
        />
      </FormControl>
    </Box>
  );
};
