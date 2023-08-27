const { REACT_APP_BASE_URL } = process.env;

export const API = {
  // Auth
  register: `${REACT_APP_BASE_URL}/user/register`,
  login: `${REACT_APP_BASE_URL}/user/login`,

  // Users
  fetchUsers: `${REACT_APP_BASE_URL}/users/list`
};
