"use client";

import { Spinner, Tab, Tabs } from "@nextui-org/react";
import { Member } from "@prisma/client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useTransition } from "react";
import { Key } from "react";
import MemberCard from "../members/memeberCard";

type Props = {
  members: Member[];
  likeIds: string[];
};

export default function ListsTab({ members, likeIds }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const tabs = [
    { id: "source", label: "Puppies I have liked" },
    { id: "target", label: "Puppies that like me" },
    { id: "mutual", label: "Matches ❤️" },
  ];

  function handleTabChange(key: Key) {
    startTransition(() => {
      const params = new URLSearchParams(searchParams);
      params.set("type", key.toString());
      router.replace(`${pathname}?${params.toString()}`);
    });
  }

  return (
    <div className="flex flex-col w-full justify-center items-center px-4">
      <Tabs
        aria-label="Like tabs"
        items={tabs}
        onSelectionChange={(key) => handleTabChange(key)}
        className="w-full"
        classNames={{
          tabList: "flex-wrap",
          tab: "text-xs sm:text-sm md:text-base",
        }}
      >
        {(item) => (
          <Tab key={item.id} title={item.label}>
            {isPending ? (
              <Spinner color="default" />
            ) : (
              <>
                {members.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-center items-center p-4">
                    {members.map((member) => (
                      <MemberCard
                        key={member.id}
                        member={member}
                        likeIds={likeIds}
                      />
                    ))}
                  </div>
                ) : (
                  <div>No Matches</div>
                )}
              </>
            )}
          </Tab>
        )}
      </Tabs>
    </div>
  );
}
