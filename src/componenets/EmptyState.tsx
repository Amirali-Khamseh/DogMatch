import { Card, CardBody, CardHeader } from "@nextui-org/react";
import React from "react";

export default function EmptyState() {
  return (
    <div className="flex justify-center items-center mt-10 md:mt-20 px-4">
      <Card className="p-4 md:p-5 w-full max-w-md">
        <CardHeader className="text-xl sm:text-2xl md:text-3xl text-center">
          There are no results for this filter
        </CardHeader>
        <CardBody className="text-center text-sm sm:text-base">
          Please select a different filter
        </CardBody>
      </Card>
    </div>
  );
}
