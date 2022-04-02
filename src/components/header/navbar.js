import React from "react";

export default function Navbar() {
  return (
    <div class="wrap">  
      <nav>
        <ul class="primary">
          <li>
            <a class="nav-color" href="">Quản lý khóa thực tập</a>
            <ul class="sub">
              <li>
                <a class="nav-color" href="/InternShip1s">Thông tin khóa thực tập</a>
              </li>
              <li>
                <a class="nav-color" href="">Thông tin sinh viên</a>
              </li>
              <li>
                <a class="nav-color" href="">Quản lý nhóm thực tập</a>
              </li>
            </ul>
          </li>
          <li>
            <a class="nav-color" href="">Danh sách người hướng dẫn</a>
            <ul class="sub"></ul>
          </li>
          <li>  
            <a class="nav-color" href="">Quản lý ứng viên</a>
            <ul class="sub">
              <li>
                <a class="nav-color" href="">Danh sách ứng viên</a>
              </li>
              <li>
                <a class="nav-color" href="">Thông tin phỏng vấn và kết quả</a>
              </li>
            </ul>
          </li>
          <li>
            <a class="nav-color" href="">Đánh giá tốt nghiệp</a>
            <ul class="sub">
            </ul>
          </li>
          <li className="float--right">
            <a class="nav-color" href="">Đăng xuất</a>
            <ul class="sub">
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
