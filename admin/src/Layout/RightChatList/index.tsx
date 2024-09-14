import { ImagePath } from "@/Constants";
import { RightChatListData } from "@/Data/RightSidebar";
import { useAppSelector } from "@/Redux/Hooks";
import { Col, Input } from "reactstrap";

const RightChatList = () => {
  const { rightSidebar } = useAppSelector((store) => store.LayoutReducer);

  return (
    <div>
      <div className={`${rightSidebar && "show"} right-sidebar`} id="right_side_bar">
        <div>
          <div className="container p-0">
            <div className="modal-header p-l-20 p-r-20">
              <Col sm="8" className=" p-0">
                <h6 className="modal-title font-weight-bold">FRIEND LIST</h6>
              </Col>
              <Col sm="4" className="text-end p-0">
                <i className="me-2" data-feather="setting"></i>
              </Col>
            </div>
          </div>
          <div className="friend-list-search mt-0">
            <div className="position-relative">
              <Input type="text" placeholder="search friend" />
              <i className="fa fa-search"></i>
            </div>
          </div>
          <div className="p-l-30 p-r-30">
            <div className="chat-box">
              <div className="people-list friend-list">
                <ul className="list">
                  {RightChatListData.map((item, i) => (
                    <li key={i} className="clearfix">
                      <img className="rounded-circle user-image" src={`${ImagePath}/dashboard${item.image}`} alt="" />
                      <div className={`status-circle ${item.statusClass}`}></div>
                      <div className="about">
                        <div className="name">{item.name}</div>
                        <div className="status"> {item.status}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightChatList;
