import React, { useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';

interface DataTableProps {
  columns: { field: string; headerName: string; width: number }[];
  pageSize: number;
  url: string;
}

export const DataTable = (props: DataTableProps) => {
  const [data, setData] = useState([]);

  const { columns, pageSize, url } = props;

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setData(data);
      });
  }, [data, url]);

  return (
    <div style={{ margin: 'auto', width: '100%' }}>
      <DataGrid columns={columns} rows={data} pageSize={pageSize} />
    </div>
  );
};
