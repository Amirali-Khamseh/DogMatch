"use client";

import {
  Button,
  Select,
  SelectItem,
  Slider,
  Spinner,
  Switch,
} from "@nextui-org/react";
import { useFilters } from "../../../hooks/useFilters";

export default function Filters() {
  const {
    genderList,
    orderByList,
    filters,
    selectAge,
    selectGender,
    selectOrder,
    clientLoaded,
    isPending,
    totalCount,
    selectWithPhoto,
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
          minValue={18}
          maxValue={100}
          defaultValue={filters.ageRange}
          onChangeEnd={(value) => selectAge(value as number[])}
          aria-label="Age range slider"
        />
      </div>
      <div className="flex flex-col items-center">
        <p className="text-sm">With photo</p>
        <Switch
          color="primary"
          defaultSelected
          size="sm"
          onChange={selectWithPhoto}
        />
      </div>
      <div className="w-1/4">
        <Select
          size="sm"
          fullWidth
          label="Order by"
          variant="bordered"
          color="primary"
          aria-label="Order by selector"
          selectedKeys={new Set([filters.orderBy])}
          onSelectionChange={selectOrder}
        >
          {orderByList.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </Select>
      </div>
    </div>
  );
}
