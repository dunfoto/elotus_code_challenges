import Image from "components/Image";
import type { IMovie } from "types/movie";
import type { ColumnDef } from "@tanstack/react-table";

export const MovieTableColumns: ColumnDef<IMovie, any>[] = [
  {
    header: "",
    accessorKey: "poster_path",
    cell: ({ row }) => (
      <Image
        path={row.original.poster_path}
        alt={row.original.title}
        width={50}
        height={40}
      />
    ),
  },
  {
    header: "Title",
    accessorKey: "title",
  },
  {
    header: "Overview",
    accessorKey: "overview",
  },
  {
    header: "Release Date",
    accessorKey: "release_date",
    size: 200,
  },
  {
    header: "Vote Average",
    accessorKey: "vote_average",
  },
];
