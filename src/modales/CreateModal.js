import ReactDOM from "react-dom";
import "./modales.css";
const CreateModal = ({ children }) => {
  return ReactDOM.createPortal(
      <div className="modal-container">
    {children}
      </div>,
    document.getElementById("createModal")
  );
};

export { CreateModal };
