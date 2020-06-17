export const requestQuote = () => ({ type: "REQUEST_QUOTE" });

export const requestQuoteSucceded = (quote) => ({
  type: "REQUEST_QUOTE_SUCCEDED",
  payload: quote,
});

export const requestQuoteFailed = () => ({ type: "REQUEST_QUOTE_FAILED" });

export const fetchQuote = () => ({ type: "FETCHED_QUOTE" });
