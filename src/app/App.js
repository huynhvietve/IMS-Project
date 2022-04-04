import { Route, Switch, Redirect } from "react-router-dom";
import BasicForm from "../components/login/Form";
import { useSelector } from "react-redux";
import GetStarting from "../components/getstarting/getStarting";


function App() {
  const isAuthen = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div>
      <Switch>
        <Route path="/" exact>
          {!isAuthen && <Redirect to="/login" />}
          {isAuthen && <Redirect to="/getstarting" />}
        </Route>
        <Route path="/login" exact>
          <BasicForm />
        </Route>
        {isAuthen && (
          <Route path="/getstarting">
            <GetStarting/>
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
