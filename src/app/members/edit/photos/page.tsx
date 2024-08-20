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
      <CardHeader className="flex justify-between">
        <p className="text-xl font-semibold "> Gallery </p>
        <MemberPhotoUpload />
      </CardHeader>

      <Divider />
      <CardBody>
        <MemberPhotos
          photos={photos}
          editing={true}
          mainImageUrl={member?.image}
        />
      </CardBody>
    </div>
  );
}
