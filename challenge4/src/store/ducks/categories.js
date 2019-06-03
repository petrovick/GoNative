import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/**Actions Types && Creators */
const { Types, Creators } = createActions({
  loadCatRequest: null,
  loadCatSuccess: ["data"],
  loadCatFailure: null
});
//O CODIGO ACIMA RESUME O CODIGO COMENTADO ABAIXO
// Type: { LOAD_REQUEST, LOAD_SUCCESS, LOAD_FAILURE }
// Creators:
/**
 * loadRequest: () => ({type: 'LOAD_REQUEST'})
 * loadSuccess: (data) => ({type: 'LOAD_SUCCESS', data})
 * loadFailure: () => ({type: 'LOAD_FAILURE'})
 */

export const CategoriesTypes = Types;
export default Creators;

/**Initial State */
export const INITIAL_STATE = Immutable({
  data: [],
  loading: false
});

/**Reducer */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_CAT_REQUEST]: state => state.merge({ loading: true }),
  [Types.LOAD_CAT_SUCCESS]: (state, { data }) =>
    state.merge({ data: data, loading: false }),
  [Types.LOAD_CAT_FAILURE]: state => state.merge({ loading: false })
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
