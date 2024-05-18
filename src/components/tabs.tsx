import { useState } from "react";

interface TabsProps {
  tabs: string[];
}

interface TabProps {
  tab: string;
  isSelected: boolean;
  onClick: (tab: string) => void;
}

const Tab = ({ tab, isSelected, onClick }: TabProps) => {
  return (
    <li
      className={`inline-block p-[10px] border-b-[2px] cursor-pointer ${
        isSelected ? "border-primary text-primary" : "border-transparent"
      } transition-all duration-300`}
      onClick={() => onClick(tab)}
    >
      {tab}
    </li>
  );
};

const Tabs = ({ tabs }: TabsProps) => {
  const [selected, setSelected] = useState(tabs[0]);
  return (
    <div className="text-lg font-bold text-center text-[#565656] border-b-[0.5px] border-[#848484]">
      <ul className="flex flex-wrap px-2">
        {tabs.map((tab) => {
          return (
            <Tab
              key={tab}
              tab={tab}
              isSelected={tab === selected}
              onClick={setSelected}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Tabs;
