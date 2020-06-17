const initialState = {
  quote: "",
  isLoading: false,
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_QUOTE":
      return {
        ...state,
        isLoading: true,
      };
    case "REQUEST_QUOTE_SUCCEDED":
      return {
        ...state,
        isLoading: false,
        quote: action.payload,
      };
    case "REQUEST_QUOTE_FAILED":
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;
