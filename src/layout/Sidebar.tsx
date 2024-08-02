import SVGAtom from "@/components/SVGAtom";
import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-60 bg-white h-full px-5">
      <div>
        <SVGAtom iconName="logo" width={208} height={28} />
      </div>
      <div></div>
    </aside>
  );
};

export default Sidebar;
