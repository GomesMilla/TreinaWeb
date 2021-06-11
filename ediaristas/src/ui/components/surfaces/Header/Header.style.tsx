import { experimentalStyled as styled } from "@material-ui/core/styles";
import { AppBar } from "@material-ui/core";
// Estou estilizando algo que já existe, por meio do parametro appbar
// Estilização para aparelhos acima de medio
export const HeaderAppBar = styled(AppBar)`
  background-color: ${({ theme }) => theme.palette.background.paper};
  box-shadow: 0px, 5px 4px rgba(0, 0, 0, 0.5);

  .MuiToolbar-root {
    height: 100px;
  }
  /* Estilização para aparelhos de medio para baixo/mobile */
  ${({ theme }) => theme.breakpoints.down("md")} {
    background-color: #c3a7fa;
    box-shadow: 0px, 5px 4px rgba(0, 0, 0, 0.5);
    .MuiToolbar-root {
      display: flex;
      justify-content: center;
    }
  }
`;
export const HeaderLogo = styled("img")`
  height: 47px;

  ${({ theme }) => theme.breakpoints.down("md")} {
    box-shadow: 0px, 5px 4px rgba(0, 0, 0, 0.5);
  }
`;

//  Cor roxa linda   background-color: #943ec3;

//  Cor roxa linda   background-color: #b08ff3;;
