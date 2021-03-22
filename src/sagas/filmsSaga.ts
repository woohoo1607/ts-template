import { put, call, takeEvery, all } from "redux-saga/effects";
import { getFilms } from "../services/api/filmsAPI";

export const TRIGGER_UPDATE_FILMS = "TRIGGER_UPDATE_FILMS";

export function* updateFilmsSaga() {
  try {
    const { results } = yield call(getFilms);
    console.log(results);
    // const isDarkMode = JSON.parse(res);
    // if (isDarkMode) {
    //   yield put({ type: UPDATE_THEME, payload: isDarkMode });
    // }
  } catch ({ message }) {
    // yield put(showErrorNotification({ message }));
  }
}

export function* watchUpdateFilmsSaga() {
  yield takeEvery(TRIGGER_UPDATE_FILMS, updateFilmsSaga);
}

export default function* filmsSaga() {
  yield all([watchUpdateFilmsSaga()]);
}
