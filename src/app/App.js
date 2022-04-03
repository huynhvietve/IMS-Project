import { Route, Switch, Redirect } from "react-router-dom";
import BasicForm from "../components/login/Form";
import Main from "../components/main/Main";
import { useSelector } from "react-redux";

function App() {
  const isAuthen = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div>
      {/* <Switch>
        <Route path="/" exact>
          {!isAuthen && <Redirect to="/login" />}
          {isAuthen && <Redirect to="/main" />}
        </Route>
        <Route path="/login" exact>
          <BasicForm />
        </Route>
        {isAuthen && (
          <Route path="/main">
            <Main />
          </Route>
        )}
        <Route path="*">
          <Redirect to="/login" />
        </Route>
      </Switch> */}
      <Main/>
    </div>
  );
}

export default App;
