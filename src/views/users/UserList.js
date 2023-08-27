import "./UserList.scss";

import React, { useEffect, useState } from "react";
import { columns, headers } from "./Data";
import { useDispatch, useSelector } from "react-redux";

import { CSVLink } from "react-csv";
import Container from "../../components/Container";
import DataTable from "../../components/Table";
import { fetchUsers } from "../../features/users/userAPI";

const UserList = () => {
  const dispatch = useDispatch();

  const {
    users: { users, count }
  } = useSelector(state => state.users);

  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 5,
    total: 0
  });
  const { current, pageSize } = pagination;

  useEffect(() => {
    dispatch(fetchUsers({ current, pageSize }));
    setPagination({ ...pagination, total: count });
    // eslint-disable-next-line
  }, [dispatch, current, pageSize]);

  const handleTableChange = pagination => {
    setPagination(pagination);
  };

  return (
    <Container>
      {users && (
        <div className="download__container">
          <CSVLink
            className="download__btn"
            filename="mylottery_user_report"
            data={users}
            headers={headers}
          >
            Download
          </CSVLink>
        </div>
      )}
      <DataTable
        data={users}
        columns={columns}
        pagination={pagination}
        onChange={handleTableChange}
      />
    </Container>
  );
};

export default UserList;
