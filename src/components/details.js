import React from "react";
import { Box } from "@mui/material";
import Modal from "@mui/material/Modal";
import ModalCard from "./modal-card";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: 20,
  width: { sm: 350, md: 400, lg: 450, xl: 500 },
  border: "0.5px solid #000",
};

export default function Details({
  isModalOpen = false,
  handleToggleModal,
  ...props
}) {
  return (
    <Modal
      open={isModalOpen}
      onClose={handleToggleModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <ModalCard {...props} />
      </Box>
    </Modal>
  );
}
