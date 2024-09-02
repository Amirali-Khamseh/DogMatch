import {
  fetchCurrentUserLikeIds,
  fetchLikedMembers,
} from "../actions/likeactions";
import ListsTab from "./ListTab";
export const dynamic = "force-dynamic";
export default async function ListsPage({
  searchParams,
}: {
  searchParams: { type: string };
}) {
  const likeIds = await fetchCurrentUserLikeIds();
  const members = await fetchLikedMembers(searchParams.type);

  return (
    <div>
      <ListsTab members={members} likeIds={likeIds} />
    </div>
  );
}
