import Modal from "react-modal";
import { capitalizeFirstLetter } from "../utils";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",

    width: 300,
    padding: 0,
    color: "black",
    border: "1px solid #efefef",
    backgroundColor: "white",
    boxShadow: "0px 25px 50px -12px rgb(0 0 0 / 0.25)",
  },
};

Modal.setAppElement("#root");

interface SelectedBodyPartModalProps {
  selectedBodyPart: null | string;
  open: boolean;
  onClose: () => void;
}

function SelectedBodyPartModal({
  selectedBodyPart,
  open,
  onClose,
}: SelectedBodyPartModalProps) {
  function closeModal() {
    if (onClose) onClose();
  }

  return (
    <div className="text-black">
      <Modal isOpen={open} onRequestClose={closeModal} style={customStyles}>
        <div className="text-center">
          <div className="p-6 font-bold">
            Hurr, You clicked "
            {selectedBodyPart
              ? capitalizeFirstLetter(
                  selectedBodyPart.replace(new RegExp("_", "g"), " ")
                )
              : ""}
            "
          </div>

          <div className="border-t w-full" />
          <button onClick={closeModal} className="text-blue-500 font-bold p-2">
            Ok
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default SelectedBodyPartModal;
