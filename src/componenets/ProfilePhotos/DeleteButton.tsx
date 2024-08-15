import React from "react";
import { AiFillDelete, AiOutlineDelete } from "react-icons/ai";
import { PiSpinnerGap } from "react-icons/pi";
import { TiDeleteOutline } from "react-icons/ti";

type Props = {
  loading: boolean;
};

export default function DeleteButton({ loading }: Props) {
  return (
    <div className="relative hover:opacity-80 transition cursor-pointer">
      {!loading ? (
        <>
          <TiDeleteOutline size={28} style={{ color: "red" }} />
        </>
      ) : (
        <PiSpinnerGap size={32} className="fill-white animate-spin" />
      )}
    </div>
  );
}
