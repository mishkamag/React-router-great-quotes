import { Route, Switch, Redirect } from "react-router-dom";
import AllQoutes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoTeDetail from "./pages/QuoteDetail";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/quotes" />
      </Route>
      <Route path="/quotes" exact>
        <AllQoutes />
      </Route>
      <Route path="/quotes/:qouteId">
        <QuoTeDetail />
      </Route>
      <Route path="/new-quotes">
        <NewQuote />
      </Route>
    </Switch>
  );
}

export default App;
