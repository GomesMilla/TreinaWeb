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
    color: #752cb9;
    font-family: "Poppins", sans-serif;
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
    color: black;
    font-family: "Poppins", sans-serif;
  }
`;
// O body2 do fontSize é um padrão que vem do
// matereial ui e vai até dois, acima não
// existe. Mesma ideia do H1 ate o H6.

// color: 6B2AEE(ROXO);
// ${({theme}) => theme.breakpoints.down('md')} == Eu estou falando que quero criar uma estilização especial
// caso o tamanho do aparelho/janela for menor/abaixo que medio
