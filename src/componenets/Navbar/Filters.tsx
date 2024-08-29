"use client";

import { Button, Slider, Spinner } from "@nextui-org/react";
import { useFilters } from "../../../hooks/useFilters";

export default function Filters() {
  const {
    genderList,
    orderByList,
    filters,
    selectAge,
    selectGender,
    clientLoaded,
    isPending,
    totalCount,
  } = useFilters();

  return (
    <div className=" shadow-lg py-4 flex w-full justify-center gap-8">
      <div className="flex gap-2 items-center">
        <div className=" text-medium">
          {isPending ? (
            <Spinner size="sm" color="secondary" />
          ) : (
            <h2>{totalCount} Results found</h2>
          )}
        </div>
      </div>

      <div className="flex gap-2 items-center">
        <div>Gender:</div>
        {genderList.map(({ icon: Icon, value }) => (
          <Button
            key={value}
            size="sm"
            isIconOnly
            color={filters.gender.includes(value) ? "primary" : "default"}
            onClick={() => selectGender(value)}
          >
            <Icon size={24} />
          </Button>
        ))}
      </div>
      <div className="flex flex-row items-center gap-2 w-1/4">
        <Slider
          label={clientLoaded && "Age range"}
          color="primary"
          size="sm"
          minValue={1}
          maxValue={50}
          defaultValue={filters.ageRange}
          onChangeEnd={(value) => selectAge(value as number[])}
          aria-label="Age range slider"
        />
      </div>
    </div>
  );
}
