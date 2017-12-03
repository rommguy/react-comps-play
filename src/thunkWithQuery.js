import {compose} from 'lodash/fp'

function createThunkMiddleware(extraArgument) {
  return ({ dispatch, query }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, query, extraArgument);
    }

    return next(action);
  };
}

export const thunk = createThunkMiddleware;

export function applyMiddleware(queryServices, ...middlewares) {
  return createStore => (...args) => {
    const store = createStore(...args)
    let dispatch = () => {
      throw new Error(
        `Dispatching while constructing your middleware is not allowed. ` +
        `Other middleware would not be applied to this dispatch.`
      )
    }
    let chain = []

    const query = selector => selector(query, store.getState(), queryServices)
    const middlewareAPI = {
      getState: store.getState,
      query,
      dispatch: (...args) => dispatch(...args)
    }
    chain = middlewares.map(middleware => middleware(middlewareAPI))
    dispatch = compose(...chain)(store.dispatch)

    return {
      ...store,
      dispatch
    }
  }
}