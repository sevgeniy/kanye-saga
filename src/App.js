import React from "react";
import { fetchQuote } from "./actionCreators";

import { connect } from "react-redux";

function App({ quote, isLoading, error, dispatch }) {
  const handleClick = (e) => {
    dispatch(fetchQuote());
  };

  return (
    <div>
      <button onClick={handleClick}>Fetch Quote</button>
      {isLoading && <p>Loading...</p>}
      {error && <p>Some error has occurred</p>}
      {!isLoading && !error && quote && <blockquote>{quote}</blockquote>}
    </div>
  );
}

const mapStateToProps = (state) => ({
  quote: state.quote,
  isLoading: state.isLoading,
  error: state.error,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
