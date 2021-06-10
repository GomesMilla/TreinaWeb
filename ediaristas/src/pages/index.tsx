import Head from 'next/head';
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';


export default function Home() {
    return (
        <div>
            <SafeEnvironment/>
            <PageTitle 
                title={'Conheça nossos profissionais'}
                subtitle={'Preencha seu endereço e veja todos os profissionais de sua localidade'}
            />           
        </div>  
    );
}

// SafeEnvironment é aqui que esta localizado a minha string Ambiente Seguro