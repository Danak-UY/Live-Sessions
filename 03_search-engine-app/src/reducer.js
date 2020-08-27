export const actionTypes = {
  SET_SEARCH_QUERY: "SET_SEARCH_QUERY",
  SET_USER_DATA: "SET_USER_DATA",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_SEARCH_QUERY: {
      return { ...state, query: action.payload };
    }
    case actionTypes.SET_USER_DATA: {
      return {
        ...state,
        avatarProfiles: [...state.avatarProfiles, action.payload],
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default reducer;
