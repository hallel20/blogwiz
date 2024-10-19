import React, { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface Props {
  children: ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <>
      <Sidebar />
      <div className="admin px-5 py-3">
        <div>{children}</div>
      </div>
    </>
  );
};

export default AdminLayout;
