import { experimentalStyled as styled} from '@material-ui/core/styles';

export const PageTitleContainer = styled('div')`
        margin-top: ${({theme}) => theme.spacing(5) + '0' };
        text-align: center;
`;

export const PageTitleStyled = styled('h2')`
        margin: 0;
        color: ${({theme}) => theme.palette.primary.main};
        font-size: ${({theme}) => theme.typography.h6.fontSize};
        font-weight: 600;
        /* font-family: cursive; */       
        
        /* Estilização para aparelhos pequenos */
        ${({theme}) => theme.breakpoints.down('md')}{
            font-size: ${({theme}) => theme.typography.body1.fontSize};
            color: #f12a4b;
            font-family: fantasy;
        }
        
`;

// color: 6B2AEE(ROXO);
// ${({theme}) => theme.breakpoints.down('md')} == Eu estou falando que quero criar uma estilização especial 
// caso o tamanho do aparelho/janela for menor/abaixo que medio
