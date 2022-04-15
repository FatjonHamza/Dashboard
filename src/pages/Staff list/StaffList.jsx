import "./staffList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { staffRows } from "../../dummyDAta";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function StaffList() {
  const [data, setData] = useState(staffRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "name",
      headerName: "Name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="staffListStaff">
            <img className="staffListImg" src={params.row.avatar} alt="" />
            {params.row.fullName}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/staff/" + params.row.id}>
              <button className="staffListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="staffListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="staffList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
    </div>
  );
}
