import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/authContextProvider";
import AdminDashboard from "./AdminDashboard";
import UserDashboard from "./UserDashboard";

const Dashboard = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return "Please wait...";
  }

  if (!user) {
    return <Navigate to={"/login"}></Navigate>;
  }

  if (user?.isAdmin) {
    return <AdminDashboard />;
  }

  return <UserDashboard />;
};

export default Dashboard;
