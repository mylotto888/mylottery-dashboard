import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import { Suspense, lazy, useContext } from "react";

import { AuthContext } from "./context/authContext";
import { Spin } from "antd";

const LoginPage = lazy(() => import("./views/login"));
const RegisterPage = lazy(() => import("./views/register"));
const UserList = lazy(() => import("./views/users/UserList"));

function App() {
  let loading = (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      }}
    >
      <Spin size="large" />
    </div>
  );
  const ProtectedRoute = ({ children }) => {
    const { token } = useContext(AuthContext);

    if (!token) {
      return <Navigate to="/login" />;
    }
    return children;
  };
  return (
    <Suspense fallback={loading}>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/user-list"
            element={
              // <ProtectedRoute>
              <UserList />
              // </ProtectedRoute>
            }
          />

          {/* Add other routes for your app */}
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
