import { KeyboardArrowDown, KeyboardArrowUp, MoreVertOutlined } from "@mui/icons-material";
import React from "./featured.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Featured() {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertOutlined fontSize="small" />
      </div>
      <div className="bottom">
        <div className="fearured">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">Total sales makes today</p>
        <p className="amount">$420</p>
        <p className="desc">
          Previous transactions processing. Last payments may be not included
        </p>
        <div className="summary">
          <div className="item">
            <div className="temtitle">Target</div>
            <div className="itemresult negative">
            <KeyboardArrowDown fontSize="small"/>
                <div className="resultamount">$12.4K</div>
            </div>
          </div>
          <div className="item">
            <div className="temtitle">Last Week</div>
            <div className="itemresult positive">
            <KeyboardArrowUp fontSize="small"/>
                <div className="resultamount">$40K</div>
            </div>
          </div>
          <div className="item">
            <div className="temtitle">Last Month</div>
            <div className="itemresult positive">
            <KeyboardArrowUp fontSize="small"/>
                <div className="resultamount">$100K</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
