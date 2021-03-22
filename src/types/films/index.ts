import { FILMS_UPDATE_LIST } from "../../reducers/filmsReducer";

export interface IFilm {
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  title: string;
  release_date: string;
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  original_language: string;
  popularity: number;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IUpdateFilmsAction {
  type: typeof FILMS_UPDATE_LIST;
  payload: IFilm[];
}

export type FilmsActionType = IUpdateFilmsAction;
