import logo from "../../asset/LOGO.png";
import "../../asset/css/form.css";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../redux/store";
import api from "../../api/api";
import { useHistory } from "react-router-dom";

const BasicForm = () => {
  const isLogin = useSelector((state) => state.auth.isAuthenticated);
  const emailInputRef = useRef();
  const paswordInputRef = useRef();

  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    if (isLogin) {
      history.push("/main");
    }
  }, [isLogin]);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPasword = paswordInputRef.current.value;

    api
      .post("http://192.168.43.30:5000/login", {
        username: enteredEmail,
        password: enteredPasword,
      })
      .then((res) => {
        console.log(res);
        const data = res.data;
        dispatch(authActions.login());
        dispatch(authActions.setToken(data.accessToken));
      })
      .catch((err) => {
        alert(" bạn điền sai thông tin !");
      });
  };

  return (
    <div className="app">
      <form onSubmit={submitHandler}>
        <div>
          <img src={logo} alt="logo" className="logo"></img>
        </div>
        <h1>ĐĂNG NHẬP</h1>
        <div className="control-group">
          <div className="form-control">
            <label htmlFor="name">Tài Khoản</label>
            <input type="text" id="name" ref={emailInputRef} required />
          </div>
        </div>
        <div className="form-control">
          <label htmlFor="password">Mật Khẩu</label>
          <input
            style={{ marginLeft: "54px" }}
            type="password"
            id="password"
            ref={paswordInputRef}
            required
          />
        </div>
        <div className="form-actions">
          <button type="submit">ĐĂNG NHẬP</button>
        </div>
      </form>
    </div>
  );
};

export default BasicForm;
