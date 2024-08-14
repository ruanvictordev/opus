import * as S from "./stylesForm";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
interface ModalProps {
  open: boolean;
}

export default function ModalForm({ open }: ModalProps) {
  return (
    <>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <S.Modal>
            <S.conteiner>
              <S.cx>
                <S.H1>Formulario</S.H1>
              </S.cx>

              <S.inputsForm>
                <S.inputs>
                  <S.titulo type="text" placeholder="Email" />

                  <S.titulo type="text" placeholder="Senha" />
                </S.inputs>
                <S.inputs>
                  <S.titulo type="text" placeholder="data de nasciemento" />

                  <S.titulo type="text" placeholder="telefone" />
                </S.inputs>
              </S.inputsForm>

              <S.divTextarea>
                <S.inputText placeholder="sobre" />
              </S.divTextarea>

              <S.inputsFormTwo>
                <S.inputs>
                  <S.titulo type="text" placeholder="Cargo" />

                  <S.titulo type="text" placeholder="Formação" />
                </S.inputs>

                <S.inputs>
                  <S.titulo type="text" placeholder="Empresa" />

                  <S.titulo type="text" placeholder="Instituição" />
                </S.inputs>

                <S.inputs>
                  <S.titulo type="text" placeholder="Duração" />

                  <S.titulo type="text" placeholder="Duração" />
                </S.inputs>

                <S.inputs>
                  <S.buttonAdd>+</S.buttonAdd>
                  <S.buttonAdd>+</S.buttonAdd>
                </S.inputs>
              </S.inputsFormTwo>

              <S.cx>
                <S.btnEntrar>Curriculo</S.btnEntrar>
              </S.cx>
              <S.cx>
                <S.btnEntrar>Entrar</S.btnEntrar>
              </S.cx>
            </S.conteiner>
          </S.Modal>
        </Box>
      </Modal>
    </>
  );
}
