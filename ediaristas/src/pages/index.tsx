import Head from "next/head";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça nossos profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais de sua localidade"
        }
      />
      <UserInformation />
      <UserInformation />
      <UserInformation />
      <UserInformation />
      <UserInformation />
    </div>
  );
}
{
  /* <UserInformation /> Carregar essa tag para mostrar os usuario */
}
// SafeEnvironment é aqui que esta localizado a minha string Ambiente Seguro
