import { getUnapprovedPhotos } from "@/app/actions/adminActions";
import MemberPhotos from "@/componenets/MemberPhotos";
import { Divider } from "@nextui-org/react";
export const dynamic = "force-dynamic";

export default async function PhotoModerationPage() {
  const photos = await getUnapprovedPhotos();
  return (
    <div className="flex flex-col m-4 sm:m-6 md:m-10 gap-3 px-4">
      <h3 className="text-xl sm:text-2xl">Photos awaiting moderation</h3>
      <Divider />
      {photos.length === 0 ? (
        <div className="text-center py-8">Nothing to Approve</div>
      ) : (
        <MemberPhotos photos={photos} />
      )}
    </div>
  );
}
