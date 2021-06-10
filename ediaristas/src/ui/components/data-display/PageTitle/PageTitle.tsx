import React from 'react';
import { PageTitleContainer, PageTitleStyled,PageSubtitleStyled } from './PageTitle.style';

interface PageTitleProps {
    title: string;
    subtitle: string;
}

const PageTitle: React.FC<PageTitleProps> = (props) => {
    
        
    return(
        <PageTitleContainer>
            <PageTitleStyled>{props.title}</PageTitleStyled>
            <PageSubtitleStyled>{props.subtitle}</PageSubtitleStyled>  
        </PageTitleContainer>
                            
    ) 
}

export default PageTitle;
// JSX.Element para declarar lá na minha interface que minha variavel pode ser um elemento tipo <h1>Ola</h1>
// a declaração de variavel "let" é para valores inteiros
// let nome = 12354677;
// Aqui é onde eu monto o meu componente e envio para todas os outros lugares
