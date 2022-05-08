import React from "react";
import Datatable from "../../compontents/Datatable/Datatable";
import Navbar from "../../compontents/Navbar/Navbar";
import Sidebar from "../../compontents/Sidebar/Sidebar/Sidebar";
import "./list.scss";
function List() {
  return (
    <div className="list">
      <Sidebar />
      <div className="container">
        <Navbar />
        <Datatable/>
      </div>
    </div>
  );
}

export default List;
