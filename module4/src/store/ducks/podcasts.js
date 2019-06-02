import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/**
 * Actions Types && Creators
 */
const { Types, Creators } = createActions({
  loadRequest: null,
  loadSuccess: ["data"],
  loadFailure: null
});
//O CODIGO ACIMA RESUME O CODIGO COMENTADO ABAIXO
// Type: { LOAD_REQUEST, LOAD_SUCCESS, LOAD_FAILURE }
// Creators:
/**
 * loadRequest: () => ({type: 'LOAD_REQUEST'})
 * loadSuccess: (data) => ({type: 'LOAD_SUCCESS', data})
 * loadFailure: () => ({type: 'LOAD_FAILURE'})
 */

export const PodcastsTypes = Types;
export default Creators;

/**
 * Initial State
 */
export const INITIAL_STATE = Immutable({
  data: []
});

/**
 * Reducer
 */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_REQUEST]: (state, { data }) => state.merge({ data: data }),
  [Types.LOAD_SUCCESS]: (state, { data }) => state.merge({ data: data }),
  [Types.LOAD_FAILURE]: (state, { data }) => state.merge({ data: data })
});

//O CODIGO ACIMA RESUME O CODIGO COMENTADO ABAIXO
/**
 * function reducer (state, action) {
 *   switch(action.type) {
 *    case 'LOAD_REQUEST':
 *      return {...state, loading: true}
 *   }
 * }
 */
