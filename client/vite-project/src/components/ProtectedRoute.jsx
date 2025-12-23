import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GetCurrentUser } from "../apiCalls/users";
import { Layout, Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import {
  HomeOutlined,
  LogoutOutlined,
  ProfileOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../Redux/userSlice";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const getValidUser = async () => {
    const response = await GetCurrentUser();
    dispatch(setUser(response.data.data));
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getValidUser();
    } else {
      navigate("/login");
    }
  }, []);

  const navItems = [
    {
      label: "Home",
      icon: <HomeOutlined />,
    },
    {
      label: `${user ? user.name : ""}`,
      icon: <UserOutlined />,
      children: [
        {
          label: (
            <button
              onClick={() => {
                if (user?.role === "admin") {
                  navigate("/admin");
                } else if (user?.role === "partner") {
                  navigate("/partner");
                } else {
                  navigate("/user");
                }
              }}
              style={{
                background: "none",
                border: "none",
                color: "inherit",
                cursor: "pointer",
                padding: 0,
              }}
            >
              My Profile
            </button>
          ),
          icon: <ProfileOutlined />,
        },

        {
          label: (
            <Link
              to="/login"
              onClick={() => {
                localStorage.removeItem("token");
              }}
            >
              Log Out
            </Link>
          ),
          icon: <LogoutOutlined />,
        },
      ],
    },
  ];

  return (
    user && (
      <Layout>
        <Header
          className="d-flex justify-content-between"
          style={{
            position: "sticky",
            top: 0,
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <h3 className="demo-logo text-white m-0" style={{ color: "white" }}>
            Book My Show
          </h3>
          <Menu theme="dark" mode="horizontal" items={navItems} />
        </Header>
        <div style={{ padding: 24, minHeight: 380, background: "#fff" }}>
          {children}
        </div>
      </Layout>
    )
  );
}

export default ProtectedRoute;
