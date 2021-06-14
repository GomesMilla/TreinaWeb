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
      <UserInformation
        name={"Camila Adriana"}
        yearold={"19" + " anos"}
        picture={"https://github.com/GomesMilla.png"}
        rating={3}
        descreption={"Campanha - MG"}
      />
      <UserInformation
        name={"Mateus Claudino"}
        yearold={"26" + " anos"}
        picture={""}
        rating={3}
        descreption={"Campanha - MG"}
      />
      <UserInformation
        name={"Chritian Kern"}
        yearold={"20" + " anos"}
        picture={"https://https://github.com/Christian-Kern-S.png"}
        rating={3}
        descreption={"Campanha - MG"}
      />
      <UserInformation
        name={"Amanda Fernandes"}
        yearold={"19" + " anos"}
        picture={"#"}
        rating={3}
        descreption={"Campanha - MG"}
      />
      <UserInformation
        name={"Carla Adriana"}
        yearold={"50" + " anos"}
        picture={"#"}
        rating={3}
        descreption={"Campanha - MG"}
      />
    </div>
  );
}
{
  /* <UserInformation /> Carregar essa tag para mostrar os usuario */
}
// SafeEnvironment é aqui que esta localizado a minha string Ambiente Seguro
