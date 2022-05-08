import React from "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatableSource.js";
import { Link } from "react-router-dom";
function Datatable() {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
          <Link to="/users/test" style={{textDecoration:"none"}}>
            <div className="viewButton">view</div></Link>
            <div className="delteButton">delete</div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
    <div className="dataTableTitle">
      Add New 
      <Link to="/users/new"  className="link">
        Add New
      </Link>


    </div>
      <DataGrid className="datagrid"
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
}

export default Datatable;
