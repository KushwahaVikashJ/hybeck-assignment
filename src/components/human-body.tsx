import { BodyComponent } from "@darshanpatel2608/human-body-react";

interface HumanBodyProps {
  onClick?: (bodyPartName: string) => void;
}

const HumanBody = ({ onClick }: HumanBodyProps) => {
  const handleClickBodyComponent = (bodyPartName: string) => {
    if (onClick) onClick(bodyPartName);
  };

  return (
    <BodyComponent
      onClick={(bodyPartName: string) => handleClickBodyComponent(bodyPartName)}
    />
  );
};

export default HumanBody;
