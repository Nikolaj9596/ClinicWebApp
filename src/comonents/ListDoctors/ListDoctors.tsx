import React from "react";
import "./ListDoctors.css";
import { DataGrid, GridColDef, GridRowParams } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import { ListDoctorsProps } from "../../state/doctor.type";
import { calculateAge } from "../../utils";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "Имя", width: 130 },
  { field: "lastName", headerName: "Фамилия", width: 130 },
  {
    field: "middleName",
    headerName: "Очество",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
  },
  {
    field: "age",
    headerName: "Возраст",
    type: "number",
    width: 90,
  },
  {
    field: "profession",
    headerName: "Специальность",
    width: 130,
  },
  {
    field: "dateStartWork",
    headerName: "Стаж",
    width: 90,
    type: "number",
  },
];

const ListDoctors: React.FC<ListDoctorsProps> = (props) => {
  const navigate = useNavigate();

  const handleRowClick = (param: GridRowParams) => {
    navigate(`/doctors/${param.id}`);
  };

  const rows = props.doctors.map((doc) => ({
    id: doc.id,
    lastName: doc.lastName,
    firstName: doc.firstName,
    middleName: doc.middleName,
    age: calculateAge(doc.dateBirthday),
    dateStartWork: calculateAge(doc.dateStartWork),
    profession: doc.profession.name,
  }));

  return (
    <div className="table">
      <DataGrid
        rows={rows}
        getRowId={(row) => row.id}
        onRowClick={handleRowClick}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        style={{padding: 0}}
      />
    </div>
  );
};

export default ListDoctors;
