import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../App.css";
import Layout from "../components/layout";
import HumanBody from "../components/human-body";

import closeIcon from "../assets/close_icon.png";
import rotateIcon from "../assets/rotate_icon.svg";
import Tabs from "../components/tabs";
import SelectedBodyPartModal from "../components/selected-body-part-modal";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center p-5 relative">
      <div className="font-bold text-xl text-[#484848]">Symptom Checker</div>
      <button
        className="right-[20px] w-6 absolute"
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={closeIcon} />
      </button>
    </div>
  );
};

const RotateButton = () => {
  return (
    <button className="flex items-center gap-2 outline-none p-5">
      <img width={25} src={rotateIcon} />
      <div className="text-primary font-bold text-md">Rotate model</div>
    </button>
  );
};

const SymptomChecker = () => {
  const [selectedBodyPart, setSelectedBodyPart] = useState<null | string>(null);

  return (
    <Layout showBottomNavigation={false}>
      <Header />
      <Tabs tabs={["Search", "Point on the body"]} />
      <RotateButton />
      <HumanBody onClick={setSelectedBodyPart} />
      <SelectedBodyPartModal
        selectedBodyPart={selectedBodyPart}
        open={selectedBodyPart !== null}
        onClose={() => setSelectedBodyPart(null)}
      />
    </Layout>
  );
};

export default SymptomChecker;
