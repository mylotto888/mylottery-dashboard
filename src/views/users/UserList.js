import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Container from "../../components/Container";
import DataTable from "../../components/Table";
import { fetchUsers } from "../../features/users/userAPI";
import moment from "moment";

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

  console.log({ users });

  const handleTableChange = pagination => {
    setPagination(pagination);
  };

  const columns = [
    {
      title: "User ID",
      dataIndex: "user_id",
      key: "user_id"
    },
    {
      title: "User Name",
      dataIndex: "username",
      key: "username",
      render: text => <p>{text ?? "-"}</p>
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: text => <p>{text ?? "-"}</p>
    },
    {
      title: "Wallet Address",
      dataIndex: "solanaPublicKey",
      key: "solanaPublicKey",
      render: text => <p>{text ?? "-"}</p>
    },
    {
      title: "Discord",
      dataIndex: "discord",
      key: "discord",
      render: text => <p>{text?.username ?? "-"}</p>
    },
    {
      title: "Google",
      dataIndex: "google",
      key: "google",
      render: text => <p>{text?.username ?? "-"}</p>
    },
    {
      title: "Twitter",
      dataIndex: "twitter",
      key: "twitter",
      render: text => <p>{text?.username ?? "-"}</p>
    },
    // {
    //   title: "Tags",
    //   key: "tags",
    //   dataIndex: "tags",
    //   render: text => {
    //     let color = "geekblue";
    //     return text?.map(t => (
    //       <Tag color={color} key={t._id}>
    //         {t.name?.toUpperCase()}
    //       </Tag>
    //     ));
    //   }
    // },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      render: text => <p>{moment(text).format("LLL")}</p>
    }
  ];

  return (
    <Container>
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
