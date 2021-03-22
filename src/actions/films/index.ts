import { FilmsActionType, IFilm } from "../../types/films";
import { FILMS_UPDATE_LIST } from "../../reducers/filmsReducer";
import { TRIGGER_UPDATE_FILMS } from "../../sagas/filmsSaga";

export const updateFilms = (payload: IFilm[]): FilmsActionType => ({
  type: FILMS_UPDATE_LIST,
  payload,
});

export const getFilms = () => ({
  type: TRIGGER_UPDATE_FILMS,
});
