import React, { useContext } from "react";

export const CounterContext = React.createContext({
  counter: 0
})

export const useCounter = () => useContext(CounterContext)
