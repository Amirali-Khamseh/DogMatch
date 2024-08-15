import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { PiSpinnerGap } from "react-icons/pi";
import { TiPinOutline } from "react-icons/ti";

type Props = {
  selected: boolean;
  loading: boolean;
};

export default function PinButton({ selected, loading }: Props) {
  return (
    <div className="relative hover:opacity-80 transition cursor-pointer">
      {!loading ? (
        <>
          <TiPinOutline
            size={28}
            style={{
              color: selected ? "yellow" : "whitesmoke",
            }}
          />
        </>
      ) : (
        <PiSpinnerGap size={32} className="fill-white animate-spin" />
      )}
    </div>
  );
}
