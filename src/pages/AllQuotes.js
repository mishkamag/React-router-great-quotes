import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "avto", text: "sichqare kaia cekvashi" },
  { id: "q2", author: "zaza", text: "ras shvebi sait xar" },
];

const AllQoutes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQoutes;
