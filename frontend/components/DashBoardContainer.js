import React from "react";
import DashBoardNav from "./DashBoardNav";

export default function DashBoardContainer({ children }) {
  return (
    <div className="dashboard">
      <DashBoardNav />
      {children}
    </div>
  );
}
