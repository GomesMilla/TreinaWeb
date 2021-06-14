import { experimentalStyled as styled } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";

// Estilização do Footer para grandes aparelhos
export const FooterStyled = styled("footer")`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  padding: ${({ theme }) => theme.spacing(4)} 0;
  margin-top: auto;

  //Estilização do Footer para pequenos aparelhos
  ${({ theme }) => theme.breakpoints.down("md")} {
    background-color: #b08ff3;
    color: black;
    box-shadow: 0px, 5px 4px rgba(0, 0, 0, 0.5);
  }
`;
// Deixar ao centro pelas propriedades que já tem dentro do material ui
export const FooterContainer = styled(Container)`
  display: flex;
  text-align: justify;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(2)};
  flex-wrap: wrap;

  ${({ theme }) => theme.breakpoints.down("md")} {
    gap: ${({ theme }) => theme.spacing(5)};
  }
`;
// Estilização dos titulos que contém dentro do footer
export const FooterTitle = styled((props) => (
  <Typography component={"h2"} variant={"body2"} {...props} />
))`
  font-weight: bold;
`;

// Estilização das listas de aplicativos que contem dentro do footer
export const AppLista = styled("ul")`
  display: flex;
  padding: 0;
  img {
    width: 122px;
    margin: 0;
    gap: ${({ theme }) => theme.spacing()};
  }
`;
