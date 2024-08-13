import * as S from "./styles";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { FiX } from "react-icons/fi";

interface ModalProps {
  handleOpen: () => void;
  open: boolean;
}

export default function ModalComponet({ handleOpen, open }: ModalProps) {
  return (
    <>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <S.Modal>
            <S.PositionI>
              <FiX onClick={handleOpen} />
            </S.PositionI>
            <S.H1>Cadastro</S.H1>
          </S.Modal>
        </Box>
      </Modal>
    </>
  );
}
