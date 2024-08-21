import { CardBody, CardFooter, CardHeader, Divider } from "@nextui-org/react";
import ChatForm from "./chatForm";
import { getMessageThread } from "@/app/actions/messageActions";
import MessageBox from "./MessageBox";
import { getAuthUserId } from "@/app/actions/authActions";

export default async function MemberDetailsPage({
  params,
}: {
  params: { userId: string };
}) {
  const messages = await getMessageThread(params.userId);
  const userId = await getAuthUserId();
  const body = (
    <div>
      {messages.length === 0 ? (
        "No messages to display"
      ) : (
        <div>
          {messages.map((message) => (
            <MessageBox
              key={message.id}
              message={message}
              currentUserId={userId}
            />
          ))}
        </div>
      )}
    </div>
  );

  return (
    <>
      <CardHeader className="text-xl font-semibold">Chat</CardHeader>
      <Divider />
      <CardBody>{body}</CardBody>
      <CardFooter>
        <ChatForm />
      </CardFooter>
    </>
  );
}
1;
