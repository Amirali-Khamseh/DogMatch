import { notFound } from "next/navigation";

import {
  getMemberByUserId,
  getMemberPhotosByUserId,
} from "@/app/actions/membersAction";
import { CardBody, CardHeader, Divider, Image } from "@nextui-org/react";

export default async function MemberDetailsPage({
  params,
}: {
  params: { userId: string };
}) {
  const photos = await getMemberPhotosByUserId(params.userId);
  if (!photos) return notFound();
  return (
    <>
      <CardHeader className="text-xl font-semibold">Photo</CardHeader>
      <Divider />
      <CardBody>
        <div className="grid grid-cols-5 gap-3">
          {photos &&
            photos.map((photo) => (
              <div key={photo.id}>
                <Image
                  width={300}
                  height={300}
                  src={photo.url}
                  alt="Member image"
                  className="object-cover aspect-square"
                />
              </div>
            ))}
        </div>
      </CardBody>
    </>
  );
}
