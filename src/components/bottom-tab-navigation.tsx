import { Link, useLocation } from "react-router-dom";

import homeIcon from "../assets/home_icon.svg";
import careIcon from "../assets/heart_icon.png";
import coverageIcon from "../assets/coverage_icon.svg";
import claimIcon from "../assets/claim_icon.svg";

interface TabProps {
  tab: string;
  icon: string;
  link: string;
  isSelected: boolean;
}

const TABS = [
  {
    name: "Home",
    icon: homeIcon,
    link: "/",
  },
  {
    name: "Care",
    icon: careIcon,
    link: "/care",
  },
  {
    name: "Coverage",
    icon: coverageIcon,
    link: "/coverage",
  },
  {
    name: "Claim",
    icon: claimIcon,
    link: "/claim",
  },
];

const Tab = ({ tab, icon, link, isSelected }: TabProps) => {
  const filterStyle =
    "brightness(0) saturate(100%) invert(62%) sepia(72%) saturate(243%) hue-rotate(140deg) brightness(95%) contrast(90%)";

  return (
    <Link to={link} className="hover:text-primary">
      <li
        className={`flex flex-col items-center p-[10px] cursor-pointer ${
          isSelected ? "text-primary" : ""
        } transition-all duration-300`}
      >
        <div
          className="bottomTab w-6 h-6"
          style={{
            filter: isSelected ? filterStyle : "",
          }}
        >
          <img src={icon} />
        </div>
        {tab}
      </li>
    </Link>
  );
};

const BottomTabNavigation = () => {
  const { pathname } = useLocation();

  return (
    <ul className="flex flex-1 justify-evenly text-sm text-[#565656] px-2 bg-white rounded-t-lg shadow-2xl shadow-black">
      {TABS.map((tab) => {
        return (
          <Tab
            key={tab.name}
            tab={tab.name}
            icon={tab.icon}
            link={tab.link}
            isSelected={tab.link === pathname}
          />
        );
      })}
    </ul>
  );
};

export default BottomTabNavigation;
