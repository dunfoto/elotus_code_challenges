import React, { ReactNode, useEffect } from "react";
import "./index.scss";

type SidebarModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  width?: string;
};

const SidebarModal = ({ isOpen, onClose, title, children, width = "400px" }: SidebarModalProps) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="sidebar-modal-backdrop" onClick={onClose}>
      <div
        className="sidebar-modal"
        style={{ width }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sidebar-header">
          <h3>{title}</h3>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="sidebar-content">{children}</div>
      </div>
    </div>
  );
}

export default SidebarModal;