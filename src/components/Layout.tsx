// Layout.jsx
import React from "react";

import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 px-6 md:px-16 lg:px-32 xl:px-40 ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
