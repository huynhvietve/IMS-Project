import * as constTable from "../../../../constant/internview/table/index";

const Table = ({ data }) => {

    return (
      <div className="grid wide1 home-interview">
      <div className="row home-interview--list1">
        <span className="col11 l-2-9 ">{constTable.NAME}</span>
        <span className="col1 l-2-9 ">{constTable.EMAIL}</span>
        <span className="col1 l-2-9 ">{constTable.DATE}</span>
        <span className="col1 l-2-9 ">{constTable.TIME}</span>
        <span className="col1 l-2-9 ">{constTable.INTERNVIEWER}</span>
        <span className="col1 l-2-9 ">{constTable.MEETING}</span>
        <span className="col1 l-2-9 ">{constTable.COMMENTS}</span>
        <span className="col1 l-2-9 ">{constTable.TECHNICALCOMMENTS}</span>
        <span className="col1 l-2-9 ">{constTable.TECHNICALSCORES}</span>
        <span className="col1 l-2-9 ">{constTable.ATTITUDE}</span>
        <span className="col1 l-2-9 ">{constTable.ENGLISH}</span>
        <span className="col1 l-2-9 ">{constTable.RESULT}</span>
        <span className="col1 l-2-9 ">{constTable.ACTION}</span>
      </div>
      <div className="table-body">
        {data.map((interview) => (
          <ul className="row sm-gutter sm-gutter--list" key={interview.idCandidate}>
            <li className="col1 l-2-9">{interview.fullName}</li>
            <li className="col1 l-2-9">{interview.emailCandidate}</li>
            <li className="col1 l-2-9">{interview.interviewDate}</li>
            <li className="col1 l-2-9">{interview.interviewTime}</li>
            <li className="col1 l-2-9">{interview.interviewer}</li>
            <li className="col1 l-2-9">{interview.interviewLink}</li>
            <li className="col1 l-2-9">{interview.comments}</li>
            <li className="col1 l-2-9">{interview.technicalComments}</li>
            <li className="col1 l-2-9">{interview.technicalScore}</li>
            <li className="col1 l-2-9">{interview.attitude}</li>
            <li className="col1 l-2-9">{interview.englishCommunication}</li>
            <li className="col1 l-2-9">{interview.status}</li>
            <li className="col1 l-2-9">
              <i
                className="fa fa-trash-o"
                aria-hidden="true"
              ></i>
              <i
                data-toggle="modal"
                data-target="#exampleModaEdit"
                className="fa fa-pencil-square-o"
                aria-hidden="true"
              ></i>
            </li>
          </ul>
        ))}
      </div>
    </div>
    );
  };
  
  export default Table;
  