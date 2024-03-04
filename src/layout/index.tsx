import { Box } from "@mui/material";
import React from "react";
import Sidebar from "../components/sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "#10141F",
          display: "flex",
          flexDirection: {
            xs: "column",
            lg: "row",
          },
          color: "white",
          padding: 3,
          overflowY: "hidden",
          height: "100vh",
        }}
      >
        <Sidebar />
        <Box
          sx={{
            width: "100%",
            overflowY: "scroll",
          }}
        >
          {children}
        </Box>
      </Box>
    </div>
  );
};

export default Layout;
