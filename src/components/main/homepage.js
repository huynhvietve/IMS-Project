import { useSelector, useDispatch } from "react-redux";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import { authActions } from "../../redux/store";
import "../../asset/css/navbar.css";
import "../../asset/css/header.css";
// import "../../asset/css/candidate.css";
import "../../asset/css/delmodal.css";
// import "../../asset/css/paging.css";
import Navbar from "../../components/layout/navbar";
import Header from "../../components/layout/header";
import indexCandidate from "../table/indexcandidate";
import indexMentor from "../table/indexmentor";
import indexStudent from "../table/indexstudent";
import indexHome from "../table/indexhome";

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
