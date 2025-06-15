import React from "react";
import Table from "components/Table";
import { useQuery } from "@tanstack/react-query";
import { getTopRated } from "apis/movie";
import { IMovie } from "types/movie";
import Pagination from "components/Pagination";
import { MovieTableColumns } from "common/movie";
import Skeleton from "components/Skeleton";

interface ITopRated {
  onViewDetail: (movie: IMovie) => void;
}
const TopRated = ({ onViewDetail }: ITopRated) => {
  const [page, setPage] = React.useState(1),
    { data, isLoading, isSuccess } = useQuery({
      queryKey: ["top_rated", page],
      queryFn: async () => {
        const response = await getTopRated(page);
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
export default TopRated;
