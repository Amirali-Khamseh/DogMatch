"use client";
import { toggleLikeMember } from "@/app/actions/likeactions";
import { useRouter } from "next/navigation";

import { GiPawHeart } from "react-icons/gi";

interface Props {
  targetId: string;
  hasLiked: boolean;
}

export default function LikeButton({ targetId, hasLiked }: Props) {
  const router = useRouter();
  async function toggleLike() {
    await toggleLikeMember(targetId, hasLiked);
    router.refresh();
  }
  return (
    <div
      onClick={toggleLike}
      className="relative hover:opacity-80 transition cursor-pointer"
    >
      <GiPawHeart size={28} style={{ color: hasLiked ? "#f43f5e" : "white" }} />
    </div>
  );
}
