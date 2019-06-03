import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/**Actions Types && Creators */

const { Types, Creators } = createActions({
  addProduct: ["product"],
  removeProduct: ["product"]
});

export const CartTypes = Types;
export default Creators;

/**Initial State */
export const INITIAL_STATE = Immutable({
  data: []
});

/**Reducer */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_PRODUCT]: (state, { product }) => {
    const productExists = state.data.find(prod => prod.id === product.id);
    if (!productExists) {
      state.merge({ data: state.data.push(product) });
    }
  },
  [Types.REMOVE_PRODUCT]: (state, { product }) => {
    const productIndex = state.data.findIndex(prod => prod.id == product.id);
    state.merge({ data: state.data.splice(productIndex, 1) });
  }
});
