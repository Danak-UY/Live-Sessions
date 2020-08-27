export const actionTypes = {
  SET_SEARCH_QUERY: "SET_SEARCH_QUERY",
  RESET_SEARCH_QUERY: "RESET_SEARCH_QUERY",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_SEARCH_QUERY: {
      console.log("reducer", action.payload);
      return { ...state, query: action.payload };
    }
    case actionTypes.RESET_SEARCH_QUERY: {
      return { ...state, query: null };
    }
    default: {
      return { ...state };
    }
  }
};

export default reducer;
