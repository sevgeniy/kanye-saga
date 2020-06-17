import { takeEvery, put, call } from "redux-saga/effects";
import {
  requestQuote,
  requestQuoteSucceded,
  requestQuoteFailed,
} from "./actionCreators";

const url = "https://api.kanye.rest/";

function* watchFetchQuote() {
  yield takeEvery("FETCHED_QUOTE", fetchQuoteAsync);
}

function* fetchQuoteAsync() {
  try {
    yield put(requestQuote());
    const data = yield call(() => {
      return fetch(url).then((response) => response.json());
    });
    yield put(requestQuoteSucceded(data.quote));
  } catch (error) {
    yield put(requestQuoteFailed());
  }
}

export { watchFetchQuote };
