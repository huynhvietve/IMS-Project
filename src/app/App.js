import { Route, Switch, Redirect } from "react-router-dom";
import BasicForm from "../components/login/form";
import Main from "../components/main/homepage";
import { useSelector } from "react-redux";

function App() {
  const isAuthen = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div>
      <Switch>
        <Route path="/" exact>
          {!isAuthen && <Redirect to="/login" />}
          {isAuthen && <Redirect to="/" />}
        </Route>
        <Route path="/login" exact>
          <BasicForm />
        </Route>
        {isAuthen && (
          <Route path="/">
            <Main />
          </Route>
        )}
        <Route path="*">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
