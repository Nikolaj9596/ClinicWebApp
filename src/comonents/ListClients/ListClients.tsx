import React from "react";
import "./ListClients.css"
import { DataGrid, GridColDef, GridRowParams } from '@mui/x-data-grid';
import { ListClientsProps } from "../../state/client.type";
import { useNavigate } from "react-router-dom";

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'Имя', width: 130 },
  { field: 'lastName', headerName: 'Фамилия', width: 130 },
  {
    field: 'middleName',
    headerName: 'Отество',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
  {
    field: 'dateBirthday',
    headerName: 'Дата рождения',
    type: 'number',
    width: 90,
  },
  {
    field: 'address',
    headerName: 'Адрес',
    width: 400,
  },
];


const ListClients: React.FC<ListClientsProps> = (props) => {

  const navigate = useNavigate();

  const handleRowClick = (param: GridRowParams) => {
    navigate(`/clients/${param.id}`);
  };

  const rows = props.clients.map((client) => ({
    id: client.id,
    lastName: client.lastName,
    firstName: client.firstName,
    middleName: client.middleName,
    address: client.address,
    dateBirthday: client.dateBirthday
  }))
  return (
    <div className='table'>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => row.id}
        onRowClick={handleRowClick}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default ListClients; 
