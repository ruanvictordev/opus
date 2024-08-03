import * as S from "./styled";
import img from "../../assets/img/peploe.png";
export const Main: React.FC = () => {
  return (
    <S.Main>
      <S.Div>
        <S.Text>
          {/* {" "} */}
          Conectando Empresas e<br /> Trabalhadores em Pedro II
        </S.Text>
        <S.Img src={img} />
      </S.Div>
    </S.Main>
  );
};
