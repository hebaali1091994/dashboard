import Sidebar from "../../compontents/Sidebar/Sidebar/Sidebar";
import Navbar from "../../compontents/Navbar/Navbar";
import Chart from "../../compontents/Charts/Charts";
import List from "../../compontents/List/List";
import "./single.scss";
function Single() {
  return (
    <div className="single">
      <Sidebar />
      <div className="container">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/9507678/pexels-photo-9507678.jpeg?cs=srgb&dl=pexels-hanna-auramenka-9507678.jpg&fm=jpg"
                alt=""
                className="imgItem"
              />
              <div className="details">
                <h1 className="itemTitle">heba ali</h1>
                <div className="detailItem">
                  <span className="itemkey">Email:</span>
                  <span className="itemValue">hebaali@yahoo.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemkey">Phone:</span>
                  <span className="itemValue"> +2 12233644</span>
                </div>{" "}
                <div className="detailItem">
                  <span className="itemkey">Address:</span>
                  <span className="itemValue">
                    Qena qena Street 1 qena dishna{" "}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemkey">Country:</span>
                  <span className="itemValue">egypt</span>
                </div>
                <div className="detailItem">
                  <span className="itemkey">Country:</span>
                  <span className="itemValue">egypt</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart title="Last 6 Month (Rrnvero)" aspect={3 / 1} />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transaction</h1>

          <List />
        </div>
      </div>
    </div>
  );
}

export default Single;
