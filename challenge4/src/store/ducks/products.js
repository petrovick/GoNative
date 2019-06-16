import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/**Actions Types && Creators */
const { Types, Creators } = createActions({
  loadRequest: ["category"],
  loadSuccess: ["data"],
  loadFailure: null,

  setSelectedCategory: ["category"]
});
//O CODIGO ACIMA RESUME O CODIGO COMENTADO ABAIXO
// Type: { LOAD_REQUEST, LOAD_SUCCESS, LOAD_FAILURE }
// Creators:
/**
 * loadRequest: () => ({type: 'LOAD_REQUEST'})
 * loadSuccess: (data) => ({type: 'LOAD_SUCCESS', data})
 * loadFailure: () => ({type: 'LOAD_FAILURE'})
 */

export const ProductsTypes = Types;
export default Creators;

/**Initial State */
export const INITIAL_STATE = Immutable({
  data: [],
  loading: false,
  selectedCategory: null
});

/**Reducer */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_REQUEST]: (state, { category }) => state.merge({ loading: true }),
  [Types.LOAD_SUCCESS]: (state, { data }) =>
    state.merge({ data: data, loading: false }),
  [Types.LOAD_FAILURE]: state => state.merge({ loading: false }),

  [Types.SET_SELECTED_CATEGORY]: (state, { category }) =>
    state.merge({ categorySelected: category })
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
