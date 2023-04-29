import { Modal, Box } from "@mui/material";
import React from "react";


const EditModal = ({ children, isEditModalOpen, CloseEditModal }) => {
    return (
        <Modal open={isEditModalOpen} onclose={CloseEditModal}>
            <div className={styles.modalContainer}>
                {children}
            </div>
        </Modal>
    );
};
const styles = {
    modalContainer: "absolute top-[50%] left-[50%] bg-white/80 rounded-lg h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 drop-shadow-3xl",
}
export default EditModal;
