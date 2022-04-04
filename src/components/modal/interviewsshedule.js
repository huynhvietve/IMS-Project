import React, { useEffect, useState } from "react";
import ApiCaller from "../../api/ApiCaller";

function InterviewsShedule(props) {
  return (
    <>
      <table>
        <tr>
          <td className="left-modal">
            <label>Họ tên *:</label>
          </td>
          <td>
            <input type="text" />
          </td>
          <td className="right-modal">
            <label>Ngày phỏng vấn *:</label>
          </td>
          <td>
            <input type="date" />
          </td>
        </tr>
        <tr>
        <td className="left-modal">
            <label>Email Inter *:</label>
          </td>
          <td>
            <input type="text" />
          </td>
          <td className="right-modal">
            <label>Giờ bắt đầu *:</label>
          </td>
          <td>
            <input type="time" />
          </td>
    
        </tr>
        <tr>
          <td className="left-modal">
            <label>Email Mentor *:</label>
          </td>
          <td>
            <input type="text" />
          </td>
          <td className="right-modal">
            <label>Người phỏng vấn *:</label>
          </td>
          <td>
            <input type="text" />
          </td>
        </tr>
        <tr>
          <td className="left-modal">
            <label>Link phỏng vấn *:</label>
          </td>
          <td>
            <input type="link" />
          </td>
        </tr>
      </table>
    </>
  );
}
export default InterviewsShedule;
