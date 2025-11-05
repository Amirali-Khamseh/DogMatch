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
import MemberImage from "./MemberImage";
import MemberPhotos from "@/componenets/MemberPhotos";

export default async function page() {
  const userId = await getAuthUserId();
  const member = await getMemberByUserId(userId);
  const photos = await getMemberPhotosByUserId(userId);
  return (
    <div>
      <CardHeader className="flex flex-col sm:flex-row justify-between items-center gap-2 p-4">
        <p className="text-lg md:text-xl font-semibold">Gallery</p>
        <MemberPhotoUpload />
      </CardHeader>

      <Divider />
      <CardBody className="p-2 sm:p-4">
        <MemberPhotos
          photos={photos}
          editing={true}
          mainImageUrl={member?.image}
        />
      </CardBody>
    </div>
  );
}
