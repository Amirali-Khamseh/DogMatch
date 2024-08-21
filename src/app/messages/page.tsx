import React from "react";
import MessageSidebar from "./MessageSidebar";
import { getMessagesByContainer } from "../actions/messageActions";
import MessageTable from "./MessageTable";

export default async function MessagesPage({
  searchParams,
}: {
  searchParams: { container: string };
}) {
  const messages = await getMessagesByContainer(searchParams.container);

  return (
    <div className="flex justify-center  w-full gap-5 h-[80vh]  mt-10">
      <div className="w-[10%]">
        <MessageSidebar />
      </div>
      <div className="w-[70%]">
        <MessageTable messages={messages} />
      </div>
    </div>
  );
}
