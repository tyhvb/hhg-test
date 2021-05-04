import { put, takeLatest } from 'redux-saga/effects';
import { dataTableActions as actions } from '.';
import axios from 'axios';
import { API_URL } from 'constant/urlConstant';

function* getData() {
  try {
    const data = yield axios.get(API_URL).then(response => response.data);

    yield put(actions.successGetData(data));
  } catch (errors) {
    yield put(actions.failGetData(errors));
  }
}

function* updateEmployee(action) {
  const { name, email, position } = action.payload;
  try {
    yield axios
      .post(API_URL, {
        name,
        email,
        position,
      })
      .then(response => response.data);
    yield put(actions.getData());
  } catch (errors) {
    yield put(actions.failGetData(errors));
  }
}

export function* dataTableSaga() {
  yield takeLatest(actions.getData, getData);
  yield takeLatest(actions.updateEmployee, updateEmployee);
}
