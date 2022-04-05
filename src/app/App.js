import { Route, Switch, Redirect } from "react-router-dom";
import BasicForm from "../components/login/Form";
import { useSelector } from "react-redux";
import Batch from "../components/main/batch";
import Home from "../components/main/batch/home";



function App() {
  const isAuthen = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div>
      <Switch>
      <Route path="/" exact>
          {!isAuthen && <Redirect to="/login" />}
          {isAuthen && <Redirect to="/batch" />}
        </Route>
        <Route path="/login" exact>
          <BasicForm />
        </Route>
        {isAuthen && (
          <Route path="/batch" exact>
            <Batch/>
          </Route>
        )}
        {isAuthen && (
          <Route path="/home/Batch" exact>
            <Home/>
          </Route>
        )}
        <Route path="*" exact>
          <Redirect to="/login" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
