import React from "react";
import {Link} from "react-router-dom"
import { authActions } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";


export default function Navbar() {

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
            <a class="nav-color" href="">My Account</a>
            <ul class="sub">
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
