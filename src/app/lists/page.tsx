import {
  fetchCurrentUserLikeIds,
  fetchLikedMembers,
} from "../actions/likeactions";
import ListsTab from "./ListTab";
export const dynamic = "force-dynamic";
export default async function ListsPage({
  searchParams,
}: {
  searchParams: Promise<{ type: string }>;
}) {
  const params = await searchParams;
  const likeIds = await fetchCurrentUserLikeIds();
  const members = await fetchLikedMembers(params.type);

  return (
    <div>
      <ListsTab members={members} likeIds={likeIds} />
    </div>
  );
}
