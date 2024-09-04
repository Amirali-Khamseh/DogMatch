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
  params: { userId: string };
}) {
  const messages = await getMessageThread(params.userId);
  const userId = await getAuthUserId();
  const chatId = createChatId(userId, params.userId);
  const body = (
    <MessageList
      initialMessages={messages}
      chatId={chatId}
      currentUserId={userId}
    />
  );

  return (
    <div className="h-[550px] overflow-y-scroll">
      <CardHeader className="text-xl font-semibold ">Chat</CardHeader>
      <Divider />
      <CardBody>{body}</CardBody>
      <CardFooter className="pb-2">
        <ChatForm />
      </CardFooter>
    </div>
  );
}
1;
