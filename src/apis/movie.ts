import axios from "utils/axios";
import { IMovie } from "types/movie";
import { Dates } from "types/common";

interface INowPlayingResponse {
  dates: Dates;
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

interface ITopRatedResponse {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export interface ISearchMoviesResponse {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export const getNowPlaying = async (page?: number) => {
  const response = await axios.get<INowPlayingResponse>(
    `/movie/now_playing?page=${page ?? 1}`
  );
  return response.data;
};

export const getTopRated = async (page?:number) => {
  const response = await axios.get<ITopRatedResponse>(`/movie/top_rated?page=${page ?? 1}`);
  return response.data;
};

export const searchMovies = async (query: string, page?: number) => {
  const response = await axios.get<ISearchMoviesResponse>(`/search/movie`, {
    params: {
      query,
      page: page ?? 1,
    },
  });
  return response.data;
};
