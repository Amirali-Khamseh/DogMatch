"use client";

import { Pagination } from "@nextui-org/react";
import clsx from "clsx";
import React, { useEffect } from "react";
import usePaginationStore from "../../hooks/usePaginationStore";

export default function PaginationComponent({
  totalCount,
}: {
  totalCount: number;
}) {
  const { setPage, setPageSize, setPagination, pagination } =
    usePaginationStore((state) => ({
      setPage: state.setPage,
      setPageSize: state.setPageSize,
      setPagination: state.setPagination,
      pagination: state.pagination,
    }));

  const { pageNumber, pageSize, totalPages } = pagination;

  useEffect(() => {
    setPagination(totalCount);
  }, [setPagination, totalCount]);

  const start = (pageNumber - 1) * pageSize + 1;
  const end = Math.min(pageNumber * pageSize, totalCount);
  const resultText = `Showing ${start}-${end} of ${totalCount} results`;

  return (
    <div className="w-full">
      <div className="flex flex-row justify-center w-full gap-8 items-center py-5">
        <div className="text-center">{resultText}</div>
        <Pagination
          total={totalPages}
          color="primary"
          page={pageNumber}
          variant="bordered"
          onChange={setPage}
        />
        <div className="flex flex-row gap-2 items-center text-center">
          Page size:
          {[3, 6, 12].map((size) => (
            <div
              key={size}
              onClick={() => setPageSize(size)}
              className={clsx("page-size-box cursor-pointer", {
                "bg-primary rounded-lg p-2 text-white hover:bg-primary-200 hover:text-white":
                  pageSize === size,
              })}
            >
              {size}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
