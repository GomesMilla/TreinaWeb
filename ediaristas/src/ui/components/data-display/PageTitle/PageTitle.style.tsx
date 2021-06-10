import { experimentalStyled as styled } from "@material-ui/core/styles";

export const PageTitleContainer = styled("div")`
  margin-top: ${({ theme }) => theme.spacing(5) + "0"};
  text-align: center;
`;
// Estilização para grandes aparelhos
export const PageTitleStyled = styled("h2")`
  margin: 0;
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: ${({ theme }) => theme.typography.h6.fontSize};
  font-weight: 600;
  /* font-family: cursive; */

  /* Estilização para aparelhos pequenos */
  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: ${({ theme }) => theme.typography.body1.fontSize};
    color: indianred;
    font-family: fantasy;
  }
`;
// Estilização para grandes aparelhos
export const PageSubtitleStyled = styled("h3")`
  margin-top: ${({ theme }) => theme.spacing(1.5) + "" + "0"};
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  font-weight: normal;

  /* Estilização para aparelhos pequenos */
  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: ${({ theme }) => theme.typography.body2.fontSize};
    color: #707070;
    font-family: fantasy;
  }
`;

// color: 6B2AEE(ROXO);
// ${({theme}) => theme.breakpoints.down('md')} == Eu estou falando que quero criar uma estilização especial
// caso o tamanho do aparelho/janela for menor/abaixo que medio
