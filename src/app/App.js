import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import BasicForm from "../components/login/form";
import { useSelector } from "react-redux";
import "../asset/css/navbar.css";
import "../asset/css/header.css";
import Navbar from "../components/home/navbar/index";
import Header from "../components/home/header/index";
import indexCandidate from "../components/table/candidate/index"
import indexMentor from "../components/table/mentor/index";
import indexStudent from "../components/table/student/index";
import indexHome from "../components/table/home/index";

function App() {
  const isAuthen = useSelector((state) => state.auth.isAuthenticated);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/main" exact>
          {!isAuthen && <Redirect to="/login" />}
          {isAuthen && <Redirect to="/" />}
        </Route>
        <Route path="/login" exact>
          <BasicForm />
        </Route>
          {isAuthen && (
        <Route path="/">
          <Header/>
          <Navbar/>  
          <Switch>
              <Route>
              <Route path="/" exact component={indexHome} />
              <Route path="/candidate" exact component={indexCandidate} />
              <Route path="/mentor" exact component={indexMentor} />
              <Route path="/student" exact component={indexStudent} />
              </Route>
          </Switch>
        </Route>   
          )}
        <Route path="*">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

