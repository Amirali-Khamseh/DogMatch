import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState, useEffect, useTransition, ChangeEvent } from "react";
import { FaMale, FaFemale } from "react-icons/fa";

import { Selection } from "@nextui-org/react";
import usePaginationStore from "./usePaginationStore";
import useFilterStore from "./useFilterStore";

export const useFilters = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [clientLoaded, setClientLoaded] = useState(false);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    setClientLoaded(true);
  }, []);

  const { filters, setFilters } = useFilterStore();

  const { pageNumber, pageSize, setPage, totalCount } = usePaginationStore(
    (state) => ({
      pageNumber: state.pagination.pageNumber,
      pageSize: state.pagination.pageSize,
      setPage: state.setPage,
      totalCount: state.pagination.totalCount,
    })
  );

  const { gender, ageRange } = filters;

  useEffect(() => {
    if (gender || ageRange) {
      setPage(1);
    }
  }, [gender, ageRange, setPage]);

  useEffect(() => {
    startTransition(() => {
      const searchParams = new URLSearchParams();

      if (gender) searchParams.set("gender", gender.join(","));
      if (ageRange) searchParams.set("ageRange", ageRange.toString());
      if (pageSize) searchParams.set("pageSize", pageSize.toString());
      if (pageNumber) searchParams.set("pageNumber", pageNumber.toString());

      router.replace(`${pathname}?${searchParams}`);
    });
  }, [ageRange, gender, router, pathname, pageNumber, pageSize]);

  const orderByList = [
    { label: "Last active", value: "updated" },
    { label: "Newest members", value: "created" },
  ];

  const genderList = [
    { value: "male", icon: FaMale },
    { value: "female", icon: FaFemale },
  ];

  const handleAgeSelect = (value: number[]) => {
    setFilters("ageRange", value);
  };

  const handleGenderSelect = (value: string) => {
    if (gender.includes(value))
      setFilters(
        "gender",
        gender.filter((g) => g !== value)
      );
    else setFilters("gender", [...gender, value]);
  };

  return {
    orderByList,
    genderList,
    selectAge: handleAgeSelect,
    selectGender: handleGenderSelect,
    filters,
    clientLoaded,
    isPending,
    totalCount,
  };
};
