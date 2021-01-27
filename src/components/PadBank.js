import { React } from "react";
import { DrumPad } from "./DrumPad";
import { padBankA, padBankB } from "../data/padBanks.js";
import "../styles/PadBank.css";

export const PadBank = ({ bank, setDisplay }) => {
  const makePads = (bank) => {
    return bank.map((trigInfo) => (
      <DrumPad
        trigInfo={trigInfo}
        key={trigInfo.trig + trigInfo.bank}
        setDisplay={setDisplay}
      />
    ));
  };

  return <div id="pad-bank">{makePads(bank === 1 ? padBankA : padBankB)}</div>;
};
