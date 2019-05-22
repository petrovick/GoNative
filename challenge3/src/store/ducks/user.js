/**
 * ACTION Types
 */

export const Types = {
  SEARCH_REQUEST: 'SEARCH_REQUEST',
  SEARCH_SUCCESS: 'SEARCH_SUCCESS',
  SEARCH_FAILURE: 'SEARCH_FAILURE',
};

INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
};

// REDUCER
export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SEARCH_REQUEST:
      return { ...state, loading: true, error: false };
    case Types.SEARCH_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        error: false,
      };
    case Types.SEARCH_FAILURE:
      return { ...state, loading: false, error: true };
    default:
      return { ...state };
  }
}

/**
 * ACTIONS Creators
 */

export const Creators = {
  userSearchRequest: data => ({
    type: Types.SEARCH_REQUEST,
    payload: {
      data,
    },
  }),
  userSearchSuccess: data => ({
    type: Types.SEARCH_SUCCESS,
    payload: { data },
  }),
  userSearchFailure: () => ({
    type: Types.SEARCH_FAILURE,
  }),
};
