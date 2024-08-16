import * as S from "./styles";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { FiX } from "react-icons/fi";



import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';




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
                <S.esquecerSenha>Esqueceu senha?</S.esquecerSenha>
              </S.divEsquecerSenha>

              <S.FormControl>
                <S.FormLabel id="demo-row-radio-buttons-group-label">Tipo de Candidato</S.FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group">
                  <FormControlLabel value="Empregado" control={<Radio />} label="Empregado" />
                  <FormControlLabel value="Empresa" control={<Radio />} label="Empresa" />
                  {/* <FormControlLabel value="other" control={<Radio />} label="Other" /> */}
                  {/* <FormControlLabel
                    value="disabled"
                    disabled
                    control={<Radio />}
                    label="other"
                  /> */}
                </RadioGroup>
              </S.FormControl>

              <S.cx>
                <S.btnEntrar onClick={handModalForm}>Entrar</S.btnEntrar>
              </S.cx>

              {/* <S.divCadastros>
                <S.esquecerSenha>Cadastro Candidato</S.esquecerSenha>

                <S.esquecerSenha>Cadastro Empresa</S.esquecerSenha>
              </S.divCadastros> */}

              {/* <S.divCadastros>
              <S.esquecerSenha>
                  Cadastro Candidato
                </S.esquecerSenha> 
                
                <S.esquecerSenha>
                  Cadastro Empresa
                </S.esquecerSenha>
              </S.divCadastros> */}
              
            </S.conteiner>
          </S.Modal>
        </Box>
      </Modal>
    </>
  );
}
