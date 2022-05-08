import React from "react";
import Charts from "../../compontents/Charts/Charts";
import Featured from "../../compontents/Featured/Featured";
import List from "../../compontents/List/List";
import Navbar from "../../compontents/Navbar/Navbar";
import Sidebar from "../../compontents/Sidebar/Sidebar/Sidebar";
import Widget from "../../compontents/Widget/Widget";
import "./home.scss";
function Home() {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />

        <div className="widgit">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="blance" />
          <Widget type="earning" />
        </div>
        <div className="chart">
          <Featured />
          <Charts  aspect={2/1}/>
        </div>
        <div className="listcontainer">

          <div className="listtitle">Latest Transactions</div>
          <List/>
        </div>
      </div>
    </div>
  );
}

export default Home;
