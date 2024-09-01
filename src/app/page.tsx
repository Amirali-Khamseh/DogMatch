import Image from "next/image";
import { Metadata } from "next";
import { Button } from "@nextui-org/react";
import { auth } from "@/auth";
import ClientSession from "@/componenets/ClientSession";
export const metadata: Metadata = {
  title: "DogMatch",
  description: "Never let your puppy alone again 🐶",
};

export default async function Home() {
  const session = await auth();
  return (
    <div className="flex flex-row justify-around mt-20 gap-6">
      <div className="bg-green-50 p-10 rounded-xl shadow-md w-1/2 overflow-auto">
        <h3 className="text-2xl font-semibold">Server session data:</h3>
        {session ? (
          <div>
            <pre>{JSON.stringify(session, null, 2)}</pre>
          </div>
        ) : (
          <div>Not signed in</div>
        )}
      </div>
      <ClientSession />
    </div>
  );
}
