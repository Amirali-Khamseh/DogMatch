import { getAuthUserId } from "@/app/actions/authActions";
import {
  getMemberByUserId,
  getMemberPhotosByUserId,
} from "@/app/actions/membersAction";
import DeleteButton from "@/componenets/ProfilePhotos/DeleteButton";
import PinButton from "@/componenets/ProfilePhotos/PinButton";

import { CardHeader, Divider, CardBody, Image } from "@nextui-org/react";
import React from "react";
import MemberPhotoUpload from "./MemberPhotoUpload";

export default async function page() {
  const userId = await getAuthUserId();
  const member = await getMemberByUserId(userId);
  const photos = await getMemberPhotosByUserId(userId);
  return (
    <div>
      <CardHeader className="text-xl font-semibold">Gallery</CardHeader>
      <Divider />
      <CardBody>
        <div className="pt-5 pl-5">
          <MemberPhotoUpload />
        </div>
        <div className="grid grid-cols-5 gap-3 p-5">
          {photos &&
            photos.map((photo) => (
              <div key={photo.id} className="relative">
                <Image
                  width={220}
                  height={220}
                  src={photo.url}
                  alt={`${member?.name} photos`}
                />
                <div className="absolute top-3 left-3 z-50">
                  <PinButton selected={true} loading={false} />
                </div>
                <div className="absolute top-3 right-3 z-50">
                  <DeleteButton loading={false} />
                </div>
              </div>
            ))}
        </div>
      </CardBody>
    </div>
  );
}
