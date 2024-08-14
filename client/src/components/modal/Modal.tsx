import * as S from "./styles";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { FiX } from "react-icons/fi";

interface ModalProps {
  handleOpen: () => void;
  open: boolean;
  handModalForm: () => void;
}

export default function ModalLogin({
  handleOpen,
  open,
  handModalForm,
}: ModalProps) {
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

            <S.conteiner>
              <S.cx>
                <S.H1>Login</S.H1>
              </S.cx>

              <S.inputs>
                <S.titulo type="text" placeholder="Email" />

                <S.titulo type="text" placeholder="Senha" />
              </S.inputs>

              <S.divEsquecerSenha>
                <S.esquecerSenha>esqueceu senha?</S.esquecerSenha>
              </S.divEsquecerSenha>

              <S.cx>
                <S.btnEntrar onClick={handModalForm}>Entrar</S.btnEntrar>
              </S.cx>

              <S.divCadastros>
                <S.esquecerSenha>Cadastro Candidato</S.esquecerSenha>

                <S.esquecerSenha>Cadastro Empresa</S.esquecerSenha>
              </S.divCadastros>
            </S.conteiner>
          </S.Modal>
        </Box>
      </Modal>
    </>
  );
}
