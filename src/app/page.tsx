import Image from "next/image";
import { Metadata } from "next";
import { Button } from "@nextui-org/react";
export const metadata: Metadata = {
  title: "DogMatch",
  description: "Never let your puppy alone again 🐶",
};

export default function Home() {
  return (
    <main className="">
      <Button size="md">Medium</Button>
    </main>
  );
}
