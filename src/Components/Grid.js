import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { ModuleRegistry } from "@ag-grid-community/core";
import { AgGridReact } from "@ag-grid-community/react";
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";
import React, { useEffect, useState } from "react";

ModuleRegistry.registerModules([ClientSideRowModelModule]);

const GridExample = () => {
  const [rowData, setRowData] = useState([]);

  const columns = [
    { headerName: "Name", field: "name" },
    { headerName: "Age", field: "age" },
  ];
  useEffect(() => {
    fetch('http://localhost:3001/car/car_data')
    .then(response => response.json())
    .then(data => setRowData(data))
    .then(error => console.error('Error fetching data', error))
  }, []);

  return (
    <div
      className="ag-theme-quartz"
      style={{ width: "20%", height: "100%" }}
    >
      <AgGridReact rowData={rowData} columnDefs={columns} />
    </div>
  );
};

export default GridExample;
