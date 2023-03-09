import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useState, useEffect } from 'react'




const columns = [
    { field: 'id', headerName: 'CASE ID', width: 150  },
    { field: 'drop_dead_date', headerName: 'DROP DEAD DATE', width: 150 },
    { field: 'case_status', headerName: 'CASE STATUS', width: 150 },
    { field: 'case_type', headerName: 'CASTE TYPE', width: 150 },
    { field: 'workflow_type', headerName: 'WORKFLOW TYPE', width: 150 },
    { field: 'contact_first_name', headerName: 'CONTACT FIRST NAME', width: 200 },
    { field: 'contact_last_name', headerName: 'CONTACT LAST NAME', width: 200 },
    { field: 'tin', headerName: 'TIN', width: 150 },
    { field: 'npi', headerName: 'NPI', width: 150 },
    { field: 'provider_weight', headerName: 'PROVIDER WEIGHT', width: 150 }
  ]



export default function BasicExampleDataGrid() {
    const [tableData, setTableData] = useState([])

    useEffect(() => {
      fetch("http://localhost:3001/users")
        .then((data) => data.json())
        .then((data) => setTableData(data))
  
    }, [])
    
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid 
       rows={tableData}
       columns={columns}
       slots={{ toolbar: GridToolbar }} 
      />
    </div>
  );
}