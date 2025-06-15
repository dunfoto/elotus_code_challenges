import React from "react";
import Table from "components/Table";
import { useQuery } from "@tanstack/react-query";
import { getNowPlaying } from "apis/movie";
import { IMovie } from "types/movie";
import Pagination from "components/Pagination";
import { MovieTableColumns } from "common/movie";
import Skeleton from "components/Skeleton";

interface INowPlaying {
  onViewDetail: (movie: IMovie) => void;
}
const NowPlaying = ({ onViewDetail }: INowPlaying) => {
  const [page, setPage] = React.useState(1),
    { data, isLoading, isSuccess } = useQuery({
      queryKey: ["movies", page],
      queryFn: async () => {
        const response = await getNowPlaying(page);
        return response;
      },
    });

  const content = isLoading ? (
    <Skeleton width={100} />
  ) : isSuccess ? (
    <Table
      data={data.results}
      columns={MovieTableColumns}
      onRowClick={onViewDetail}
    />
  ) : (
    <div>Error loading movies.</div>
  );
  return (
    <div>
      {content}
      <Pagination
        totalPages={data?.total_pages ?? 0}
        currentPage={page}
        onPageChange={(page) => {
          setPage(page);
        }}
      />
    </div>
  );
};
export default NowPlaying;
