import React, { useEffect, useState} from "react";
import { withRouter } from "react-router-dom";
import * as apiaxios from "../../../../api/service";
import Table from "../../../table/interview/table/index"
import * as constTable from "../../../../constant/internview/table/index";
import  "../search/style.css";

function Index() {
  const [interviews, setinterviews] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
        apiaxios.interviewAPI(`internview/?fullName=${interviews}`,null).then((res) =>
        {
         setPosts(res.data.data);
        })
     }
      if (interviews.length === 0 || interviews.length > 0) 
      try {
      fetchData();
    } catch (error) {
      console.log(error.response.status.error);
      console.log(error.response.data.error);
    } 
  }, [interviews]);

  return (
    <div>
      <h3>{constTable.H3}</h3>
      <div className="input-toolbar">
        <div className="search-box">
        <div className="search">
          <form action="">
            <input type="text"
                  className="search__input" 
                  id="search" 
                  placeholder="Tìm kiếm..." 
                  onChange={(e) => setinterviews(e.target.value.toLowerCase())}/>
            <i className="search__icon fa fa-search"></i>
          </form>
        </div>
        </div>
      </div>
         {<Table data={posts} />}
    </div>
  );
}

export default withRouter(Index);