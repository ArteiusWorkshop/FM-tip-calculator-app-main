import { CalculatorState } from "./";

type CalculatorActionType =
  | { type: "Calculator - Set Bill"; payload: number }
  | { type: "Calculator - Set People"; payload: number }
  | { type: "Calculator - Set Tip"; payload: { tip: number; style: string } }
  | { type: "Calculator - Set Reset" }
  | {
      type: "Calculator - Set Tip Amount";
      payload: { bill: number; people: number; tip: number };
    }
  | {
      type: "Calculator - Set Total";
      payload: { bill: number; people: number; tip: number };
    };

export const CalculatorReducer = (
  state: CalculatorState,
  action: CalculatorActionType
): CalculatorState => {
  switch (action.type) {
    case "Calculator - Set Bill":
      return {
        ...state,

        bill: action.payload,
      };

    case "Calculator - Set People":
      return {
        ...state,

        people: action.payload,
      };
    case "Calculator - Set Tip":
      return {
        ...state,

        tip: action.payload.tip,
        tipStyle: action.payload.style,
      };
    case "Calculator - Set Reset":
      return {
        ...state,

        bill: 0,
        people: 0,
        tip: 0,
      };
    case "Calculator - Set Tip Amount":
      return {
        ...state,

        tipAmount: (
          ((action.payload.bill / 100) * action.payload.tip) /
          action.payload.people
        ).toFixed(2),
      };
    case "Calculator - Set Total":
      return {
        ...state,
        total: (
          ((action.payload.bill / 100) * action.payload.tip +
            action.payload.bill) /
          action.payload.people
        ).toFixed(2),
      };

    default:
      return state;
  }
};
