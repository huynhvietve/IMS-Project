import React from "react";
import {Link} from "react-router-dom"
import { authActions } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";


export default function Navbar() {

    const id = useSelector((state) => state.auth.id);

    const isLogin = useSelector((state) => state.auth.isAuthenticated);
    const dispatch = useDispatch();
    const logoutHandler = () => {
      dispatch(authActions.logout());
    };
  return (
    <div class="wrap">  
      <nav>
        <ul class="primary">
          <li>
          <Link class="nav-color" to="/mentor">Quản lý Mentor</Link>
            <ul class="sub">
            </ul>
          </li>
          <li>
            <Link class="nav-color" to="/candidate">Quản lý ứng viên</Link>
            <ul class="sub"></ul>
          </li>
          <li>
            <Link class="nav-color" to="/student">Quản lý sinh viên</Link>
            <ul class="sub">
            </ul>
          </li>
          <li>
            <a class="nav-color" href=""
            data-toggle="modal"
            data-target="#exampleModal4"
            >Đánh giá thực tập</a>
            <ul class="sub">
              <li>
                <a class="nav-color" href=""
                data-toggle="modal"
                data-target="#exampleModal4"
                >Báo cáo </a>
              </li>
              <li>
                <a class="nav-color" href=""
                 data-toggle="modal"
                 data-target="#exampleModal4"
                >Cấu hình</a>
                
              </li>
            </ul>
            <div
        class="modal fade"
        id="exampleModal4"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <div className="container d-flex pl-0">
                <h5
                  className="modal-title ml-2"
                  id="exampleModalLabel"
                  style={
                    { color: "#007bff" }}
                >
                  Chức năng này sẽ được hỗ trợ sau
                </h5>
              </div>
            </div>
          
            <div className="modal-footer">
              {" "}
              <button
                type="button"
                className="btn btn-light"
                data-dismiss="modal"
              >
                Hủy
              </button>
            </div>
          </div>
        </div>
      </div>
          </li>
          <li className="float--right">
            <a class="nav-color" onClick={logoutHandler}>Đăng xuất</a>
            <ul class="sub">
            </ul> 
          </li>
          <li className="float--right">
            <p 
            class="nav-color1">
              <svg className="svg--list" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
          </svg>{id}
            
            </p>
            <ul class="sub">
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
