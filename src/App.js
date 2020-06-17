import React, { useEffect } from "react";
import {
  requestQuote,
  requestQuoteSucceded,
  requestQuoteFailed,
} from "./actionCreators";

import { connect } from "react-redux";

const url = "https://api.kanye.rest/";

function App({ quote, isLoading, error, dispatch }) {
  const fetchQuote = (e) => {
    dispatch(requestQuote());
  };

  useEffect(() => {
    if (!isLoading) {
      return;
    }

    fetch(url)
      .then((response) => response.json())
      .then(
        (data) => dispatch(requestQuoteSucceded(data.quote)),
        (error) => dispatch(requestQuoteFailed())
      );
  }, [isLoading, dispatch]);

  return (
    <div>
      <button onClick={fetchQuote}>Fetch Quote</button>
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
