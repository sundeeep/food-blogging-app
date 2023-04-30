import { Modal, Box } from "@mui/material";
import React from "react";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "none",
    boxShadow: 24,
    borderRadius: ".5rem",
};

const AddModal = ({ children, isAddModalOpen, CloseAddModal }) => {
    return (
        <Modal open={isAddModalOpen} onclose={CloseAddModal}>
            <div className={styles.modalContainer}>{children}</div>
        </Modal>
    );
};
const styles = {
    modalContainer:
    "absolute py-3 top-[50%] left-[50%] bg-white rounded-lg w-[500px] -translate-x-1/2 -translate-y-1/2 drop-shadow-3xl",
};
export default AddModal;
