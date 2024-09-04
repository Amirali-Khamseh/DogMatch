import { Metadata } from "next";
import { auth } from "@/auth";
import { Image } from "@nextui-org/react";

export const metadata: Metadata = {
  title: "DogMatch",
  description: "Never let your puppy alone again 🐶",
};

export default async function Home() {
  const session = await auth();
  return (
    <div className="flex flex-col w-full md:flex-row justify-center items-center mt-20 gap-3">
      <Image
        src="https://res.cloudinary.com/drc6sxenk/image/upload/v1725452346/mubunrslkbeih0y6edyh.jpg"
        width={500}
        height={500}
        alt="two loving dog"
      />

      <h1 className="text-4xl font-semibold text-center ">
        Never let your puppy be <br />
        <span className="bg-gradient-to-r from-gray-500 to-white bg-clip-text text-transparent">
          alone
        </span>{" "}
        again
      </h1>
    </div>
  );
}
