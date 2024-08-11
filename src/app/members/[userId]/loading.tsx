import { Spinner } from "@nextui-org/react";
import React from "react";

export default function loading() {
  return (
    <div className="flex justify-center items-center pt-[4rem]">
      <Spinner label="Loading..." color="primary" />
    </div>
  );
}
