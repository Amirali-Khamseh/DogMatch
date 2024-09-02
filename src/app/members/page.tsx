import EmptyState from "@/componenets/EmptyState";
import PaginationComponent from "@/componenets/PaginationComponent";
import { GetMemberParams } from "@/types";
import { fetchCurrentUserLikeIds } from "../actions/likeactions";
import { getMembers } from "../actions/membersAction";
import MemberCard from "./memeberCard";

export default async function MembersPage({
  searchParams,
}: {
  searchParams: GetMemberParams;
}) {
  const { items: members, totalCount } = await getMembers(searchParams);
  const likeIds = await fetchCurrentUserLikeIds();

  return (
    <>
      {!members || members.length === 0 ? (
        <EmptyState />
      ) : (
        <>
          <div className="m-10 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-8">
            {members &&
              members.map((member) => (
                <MemberCard member={member} key={member.id} likeIds={likeIds} />
              ))}
          </div>
          <PaginationComponent totalCount={totalCount} />
        </>
      )}
    </>
  );
}
