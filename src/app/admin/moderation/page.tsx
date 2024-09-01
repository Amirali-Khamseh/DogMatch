import { getUnapprovedPhotos } from "@/app/actions/adminActions";
import MemberPhotos from "@/componenets/MemberPhotos";
import { Divider } from "@nextui-org/react";

export default async function PhotoModerationPage() {
  const photos = await getUnapprovedPhotos();
  return (
    <div className="flex flex-col m-10 gap-3">
      <h3 className="text-2xl">Photos awaiting moderation</h3>
      <Divider />
      {photos.length === 0 ? (
        "Nothing to Approve "
      ) : (
        <MemberPhotos photos={photos} />
      )}
    </div>
  );
}
