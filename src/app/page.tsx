import Image from "next/image";
import { Metadata } from "next";
import { Button } from "@nextui-org/react";
import { auth } from "@/auth";
export const metadata: Metadata = {
  title: "DogMatch",
  description: "Never let your puppy alone again 🐶",
};

export default async function Home() {
  const session = await auth();
  return (
    <main>
      Main page
      {session ? (
        <div>
          <pre>{JSON.stringify(session, null, 2)}</pre>
        </div>
      ) : (
        <p></p>
      )}
    </main>
  );
}
