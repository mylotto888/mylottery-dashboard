import React from "react";
import { Table } from "antd";

const DataTable = ({ columns, data, pagination, onChange }) => (
  <Table
    columns={columns}
    dataSource={data}
    pagination={pagination}
    onChange={onChange}
  />
);
export default DataTable;
