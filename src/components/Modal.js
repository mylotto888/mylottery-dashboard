import React from "react";

const Modal = ({ children }) => {
  return (
    <Modal open={visible} title={title} onCancel={onCancel} onOk={form.submit}>
      {children}
    </Modal>
  );
};

export default Modal;
