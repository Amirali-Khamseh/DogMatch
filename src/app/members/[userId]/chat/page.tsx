import { CardBody, CardFooter, CardHeader, Divider } from "@nextui-org/react";
import ChatForm from "./chatForm";
import { getMessageThread } from "@/app/actions/messageActions";
import MessageBox from "./MessageBox";
import { getAuthUserId } from "@/app/actions/authActions";
import MessageList from "./MessageList";
import { createChatId } from "@/lib/util";

export default async function MemberDetailsPage({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId: memberUserId } = await params;
  const messages = await getMessageThread(memberUserId);
  const userId = await getAuthUserId();
  const chatId = createChatId(userId, memberUserId);
  const body = (
    <MessageList
      initialMessages={messages}
      chatId={chatId}
      currentUserId={userId}
    />
  );

  return (
    <div className="h-[400px] sm:h-[500px] md:h-[550px] overflow-y-scroll">
      <CardHeader className="text-lg md:text-xl font-semibold ">
        Chat
      </CardHeader>
      <Divider />
      <CardBody className="p-2 sm:p-4">{body}</CardBody>
      <CardFooter className="pb-2 px-2 sm:px-4">
        <ChatForm />
      </CardFooter>
    </div>
  );
}
1;
