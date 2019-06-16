import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/**Actions Types && Creators */

const { Types, Creators } = createActions({
  addProduct: ["product"],
  removeProduct: ["product"],
  addQuantity: ["cartItem"]
});

export const CartTypes = Types;
export default Creators;

/**Initial State */
export const INITIAL_STATE = Immutable({
  data: [
    {
      product: {
        id: 1,
        name: "Camiseta Primo Tipper",
        brand: "Rip Curl",
        image:
          "https://t-static.dafiti.com.br/weG0u9eKZ4KBV-G0XFOQ5hoY4eI=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2frip-curl-camiseta-rip-curl-primo-tipper-preto-8138-3441052-1-product.jpg",
        price: 39.99
      },
      quantity: 1
    }
  ]
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
    //const productIndex = state.data.findIndex(prod => prod.id == product.id);
    const multableData = Immutable.asMutable(state.data);
    console.tron.log("product");
    console.tron.log(product);

    const auxData = multableData.filter(cart => {
      return cart.product.id !== product.product.id;
    });
    console.tron.log("auxData");
    console.tron.log(auxData);

    if (auxData) {
      return state.merge({
        data: auxData
      });
    } else {
      return state;
    }
  },
  [Types.ADD_QUANTITY]: (state, { cartItem }) => {
    const cart = state.data.find(
      cart => cart.product.id == cartItem.product.id
    );
    if (cart) {
      return state.merge({
        data: state.data.map(function(val, index) {
          return val.product.id === cartItem.product.id
            ? {
                product: val.product,
                quantity: cartItem.quantity
              }
            : val;
        })
      });
    } else {
      return state.merge({ data: [...state.data, cartItem] });
    }
  }
});
