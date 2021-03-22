import { IFilm } from "../../types/films";
import { baseAPI } from "./baseAPI";

const ENDPOINT = "/discover/movie";

interface IFilmsResponse {
  page: number;
  results: IFilm[];
  total_pages: number;
  total_results: number;
}

export const getFilms = async (): Promise<IFilmsResponse> => {
  return await baseAPI.get(ENDPOINT);
};
