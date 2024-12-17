import user from "../../static/images/user.png";
import { NavLink } from "react-router-dom";

const Left = () => {
  return (
    <>
      <aside className="aside">
        <div className="container_left">
          <div className="aside_items">
            <div className="contacts_chat">
              <NavLink className="contact_chat" to={"userId/2"}>
                <div className="img">
                  <img src={user} alt="" />
                </div>
                <div className="info_user">
                  <div className="first_name">Name</div>
                  <div className="last_name">Name</div>
                </div>
                <div className="info_messages">
                  <div>5</div>
                </div>
              </NavLink>
              <NavLink className="contact_chat" to={"userId/3"}>
                <div className="img">
                  <img src={user} alt="" />
                </div>
                <div className="info_user">
                  <div className="first_name">Name</div>
                  <div className="last_name">Name</div>
                </div>
                <div className="info_messages">
                  <div>5</div>
                </div>
              </NavLink>
              <NavLink className="contact_chat" to={"userId/1"}>
                <div className="img">
                  <img src={user} alt="" />
                </div>
                <div className="info_user">
                  <div className="first_name">Name</div>
                  <div className="last_name">Name</div>
                </div>
                <div className="info_messages">
                  <div>5</div>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Left;
