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

            <S.conteiner>
            
              <S.cx>
                <S.H1>Login</S.H1>
              </S.cx>

              <S.cx>
                <S.titulo>
                  Email:
                </S.titulo>
              </S.cx>

              <S.cx>
                <S.titulo>
                  Senha:
                </S.titulo>
              </S.cx>

              <S.divEsquecerSenha>
                <S.esquecerSenha>
                  esqueceu senha?
                </S.esquecerSenha>
              </S.divEsquecerSenha>

              <S.cx>
                <S.titulo>
                  Entrar
                </S.titulo>
              </S.cx>

              <S.divCadastros>
              <S.esquecerSenha>
                  Cadastro Candidato
                </S.esquecerSenha> 
                
                <S.esquecerSenha>
                  Cadastro Empresa
                </S.esquecerSenha>
              </S.divCadastros>
            </S.conteiner>


          </S.Modal>
        </Box>
      </Modal>
    </>
  );
}
