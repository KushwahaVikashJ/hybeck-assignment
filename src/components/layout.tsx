import React from "react";
import BottomNavigation from "./bottom-tab-navigation";

interface LayoutProps {
  children: React.ReactNode;
  showBottomNavigation?: boolean;
}

const Layout = ({ children, showBottomNavigation = true }: LayoutProps) => {
  return (
    <div className="flex flex-col w-[375px] bg-white h-[100vh] text-black">
      <div className="overflow-scroll">{children}</div>
      {showBottomNavigation && (
        <div className="mt-auto">
          <BottomNavigation />
        </div>
      )}
    </div>
  );
};

export default Layout;
