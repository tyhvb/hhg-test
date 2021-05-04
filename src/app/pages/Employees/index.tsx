import React from 'react';
import { DataTable } from 'app/components/DataTable';

const columns = [
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'email', headerName: 'Email', width: 130 },
  { field: 'position', headerName: 'Position', width: 130 },
];

export function Employees() {
  return (
    <div style={{ height: '100vh' }}>
      <DataTable
        columns={columns}
        pageSize={5}
        url="https://6091102850c255001767786a.mockapi.io/employees"
      />
    </div>
  );
}
