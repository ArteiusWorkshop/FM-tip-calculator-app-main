import { createContext } from "react";

interface ContextProps {
  bill: number;
  people: number;
  tipAmount: string;
  total: string;
  tip: number;
  tipStyle: string;

  //Methods
  setBill: (bill: number) => void;
  setPeople: (people: number) => void;
  setTip: (tip: number, style: string) => void;
  reset: () => void;
  setTotal: (bill: number, people: number, tip: number) => void;
  setTipAmount: (bill: number, people: number, tip: number) => void;
}

export const CalculatorContext = createContext({} as ContextProps);
