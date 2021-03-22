import { all } from "redux-saga/effects";
import filmsSaga from "./filmsSaga";

export function* rootSaga() {
  yield all([filmsSaga()]);
}
