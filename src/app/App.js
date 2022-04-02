// import reactRouterDom from "react-router-dom";
// import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
// import BasicForm from "../components/login/Form";
// import Main from "../components/main/Main";
// import { useSelector } from "react-redux";
import indexMentor from "../components/table/indexMentor";
import reactRouterDom from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "../components/header/navbar";
import Header from "../components/header/header";
import "../asset/css/navbar.css"
import "../asset/css/header.css"
import "../asset/css/add_edit_Modal.css";
import "../asset/css/mentor.css";
import "../asset/css/delModal.css";

function App() {
  // const isAuthen = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Navbar/>
        <Switch>
        <Route path="/" exact component={indexMentor} />
          {/* <Route path="/" exact>
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
          </Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
