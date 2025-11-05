import React from "react";
import MessageSidebar from "./MessageSidebar";
import { getMessagesByContainer } from "../actions/messageActions";
import MessageTable from "./MessageTable";

export default async function MessagesPage({
  searchParams,
}: {
  searchParams: { container: string };
}) {
  const { messages, nextCursor } = await getMessagesByContainer(
    searchParams.container
  );
  console.log({ messages });

  return (
    <div className="flex flex-col md:grid md:grid-cols-12 gap-5 h-auto md:h-[80vh] mt-4 md:mt-10 px-4">
      <div className="w-full md:col-span-2">
        <MessageSidebar />
      </div>
      <div className="w-full md:col-span-10">
        <MessageTable initialMessages={messages} nextCursor={nextCursor} />
      </div>
    </div>
  );
}
