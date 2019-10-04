import { runSaga } from 'redux-saga';

const recordSaga = async (saga, initialAction, state = {}) => {
  const dispatched = [];

  await runSaga(
    {
      dispatch: (action) => dispatched.push(action),
      getState: () => state
    },
    saga,
    initialAction
  ).done;

  return dispatched;
};

export default recordSaga;
