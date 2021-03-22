import { FilmsActionType, IFilm } from "../types/films";

export const FILMS_UPDATE_LIST = "FILMS_UPDATE_LIST";

const initialState = {
  films: [] as IFilm[],
};

const filmsReducer = (
  state = initialState,
  { type, payload }: FilmsActionType
) => {
  switch (type) {
    case FILMS_UPDATE_LIST: {
      return {
        films: [...payload],
      };
    }
    default:
      return state;
  }
};

export default filmsReducer;
