import { Navigate, Outlet } from "react-router-dom";

// eslint-disable-next-line react/prop-types, no-unused-vars
export default function ProtectedRouter({ children }) {
  if (!localStorage.getItem("accessToken")) {
    return <Navigate to="/login" />
  }
  return <Outlet />;
}
