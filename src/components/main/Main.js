import { useSelector, useDispatch } from "react-redux";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import { authActions } from "../../redux/store";
import "../../asset/css/navbar.css";
import "../../asset/css/header.css";
// import "../../asset/css/candidate.css";
// import "../../asset/css/delModal.css";
// import "../../asset/css/pagination.css";
import Navbar from "../../components/layout/navbar";
import Header from "../../components/layout/header";
import indexCandidate from "../table/indexCandidate";
import indexMentor from "../table/indexMentor";
import indexStudent from "../table/indexStudent";
import indexHome from "../table/indexHome";

function Main(){
 
  return (
    <BrowserRouter>
    <Header />
      <Navbar />  
      <Switch>
      <Route path="/" exact component={indexHome} />
        <Route path="/candidate" exact component={indexCandidate} />
        <Route path="/mentor" exact component={indexMentor} />
        <Route path="/student" exact component={indexStudent} />
      </Switch>
    </BrowserRouter>
  );
};
export default Main;