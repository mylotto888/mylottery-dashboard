import moment from "moment";

export const columns = [
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
  {
    title: "Created At",
    dataIndex: "createdAt",
    key: "createdAt",
    render: text => <p>{moment(text).format("LLL")}</p>
  }
];

export const headers = [
  { label: "User ID", key: "user_id" },
  { label: "Email", key: "email" },
  { label: "Username", key: "username" },
  { label: "Wallet Address", key: "solanaPublicKey" },
  { label: "Discord", key: "discord.username" },
  { label: "Google", key: "google.username" },
  { label: "Twitter", key: "twitter.username" },
  { label: "Created At", key: "createdAt" }
];
