import { FC, useReducer } from "react";
import { CalculatorContext, CalculatorReducer } from "./";

export interface CalculatorState {
  bill: number;
  people: number;
  tipAmount: string;
  total: string;
  tip: number;
  tipStyle: string;
}

interface Props {
  children?: React.ReactNode | undefined;
}

const Calculator_INITIAL_STATE: CalculatorState = {
  bill: 0,
  people: 0,
  tipAmount: "",
  total: "",
  tip: 0,
  tipStyle: "",
};

export const CalculatorProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(
    CalculatorReducer,
    Calculator_INITIAL_STATE
  );

  const setBill = (value: number) => {
    dispatch({ type: "Calculator - Set Bill", payload: value });
  };
  const setPeople = (value: number) => {
    dispatch({ type: "Calculator - Set People", payload: value });
  };
  const setTip = (value: number, word: string) => {
    dispatch({
      type: "Calculator - Set Tip",
      payload: { tip: value, style: word },
    });
  };
  const setTipAmount = (bill: number, people: number, tip: number) => {
    dispatch({
      type: "Calculator - Set Tip Amount",
      payload: { bill: bill, people: people, tip: tip },
    });
  };
  const setTotal = (bill: number, people: number, tip: number) => {
    dispatch({
      type: "Calculator - Set Total",
      payload: { bill: bill, people: people, tip: tip },
    });
  };
  const reset = () => {
    dispatch({ type: "Calculator - Set Reset" });
  };

  return (
    <CalculatorContext.Provider
      value={{
        ...state,

        //Methods

        setBill,
        setPeople,
        setTip,
        reset,
        setTotal,
        setTipAmount,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};
