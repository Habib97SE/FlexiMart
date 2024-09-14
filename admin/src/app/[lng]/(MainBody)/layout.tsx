"use client";
import Customizer from "@/Layout/Customizer";
import Footer from "@/Layout/Footer";
import Header from "@/Layout/Header";
import RightChatList from "@/Layout/RightChatList";
import Sidebar from "@/Layout/Sidebar";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className="page-wrapper">
        <Header />
        <div className="page-body-wrapper">
          <Sidebar />
          <RightChatList />
          <div className="page-body">
            {/* <Outlet /> */}
            {children}
          </div>
          <Footer />
        </div>
      </div>
      <Customizer />
    </div>
  );
};

export default layout;
