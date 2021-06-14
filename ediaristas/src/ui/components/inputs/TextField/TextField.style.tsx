import { experimentalStyled as styled } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

export const TextFieldStyled = styled(TextField)`
  .MuiInputBase-root {
    background-color: ${({ theme }) => theme.palette.grey[50]};
  }
  .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme }) => theme.palette.grey[100]};
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    /* Cor que altera dentro do input */
    .MuiInputBase-root {
      background-color: ${({ theme }) => theme.palette.grey[50]};
    }
    .MuiOutlinedInput-notchedOutline {
      border-color: #b08ff3;
      box-shadow: 0px, 5px 4px rgba(0, 0, 0, 0.5);
    }
  }
`;
