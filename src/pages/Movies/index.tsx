import React, { useState } from "react";
import { Tabs } from "components/Tab";
import NowPlaying from "pages/Movies/NowPlaying";
import TopRated from "pages/Movies/TopRated";
import { useForm } from "react-hook-form";
import SearchBar from "components/SearchBar";
import SideBar from "components/Sidebar";
import type { IMovie } from "types/movie";
import type { Nullable } from "types/common";
import Image from "components/Image";

import "./index.scss";
import { searchMovies } from "apis/movie";
import type { ISearchMoviesResponse } from "apis/movie";
import Table from "components/Table";
import { MovieTableColumns } from "common/movie";
import debounce from "lodash/debounce";

import { useTranslate } from "i18n";
import Pagination from "components/Pagination";

const Movies: React.FC = () => {
  const [movie, setMovie] = useState<Nullable<IMovie>>(null),
    [searchResp, setSearchResp] =
      useState<Nullable<ISearchMoviesResponse>>(null),
    [pageSearch, setPageSearch] = useState(1),
    {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      defaultValues: {
        search: "",
      },
    });

  const { t } = useTranslate({
    namespace: "Movie",
  });

  const onSubmit = async (data: { search: string }) => {
    const resp = await searchMovies(data.search, 1);
    setSearchResp(resp);
  };

  const onViewDetail = (selectedMovie: IMovie) => {
    setMovie(selectedMovie);
  };

  const onSearchChange = debounce(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const searchTerm = e.target.value;
      if (searchTerm.length === 0) {
        setSearchResp(null);
        return;
      }
      const resp = await searchMovies(searchTerm, 1);
      setSearchResp(resp);
    },
    500
  );

  return (
    <>
      <h1>{t("title")}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SearchBar
          {...register("search", { required: true })}
          placeholder="Search for movies..."
          onChange={onSearchChange}
        />
        {errors.search && <span>This field is required</span>}
      </form>
      {searchResp && searchResp.results.length > 0 ? (
        <div className="search-results">
          <Table
            data={searchResp.results}
            columns={MovieTableColumns}
            onRowClick={onViewDetail}
          />
          <Pagination
            totalPages={searchResp.total_pages}
            currentPage={pageSearch}
            onPageChange={(page) => {
              setPageSearch(page);
            }}
          />
        </div>
      ) : (
        <Tabs
          tabs={[
            {
              label: "Now Playing",
              content: <NowPlaying onViewDetail={onViewDetail} />,
            },
            {
              label: "Top Rated",
              content: <TopRated onViewDetail={onViewDetail} />,
            },
          ]}
        />
      )}
      {movie && (
        <SideBar
          isOpen={!!movie}
          onClose={() => setMovie(null)}
          title={movie.title}
        >
          <div className="image-container">
            <Image
              path={movie.poster_path}
              alt={movie.overview}
              height={400}
              width={400}
            />
          </div>
          <div>
            <p>{movie.overview}</p>
            <p>
              <i>Release Date:</i> <b>{movie.release_date}</b>
            </p>
            <p>
              <i>Vote Average:</i> <b>{movie.vote_average}</b>
            </p>
          </div>
        </SideBar>
      )}
    </>
  );
};
export default Movies;
