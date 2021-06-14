import Head from "next/head";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import TextFieldMaask from "ui/components/inputs/TextFieldMask/TextFieldMask";
import { Button } from "@material-ui/core";
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
      <TextFieldMaask
        mask={"99.999-999"}
        label={"Digite seu CEP"}
        fullWidth
        variant={"outlined"}
      />
      <Button
        variant={"contained"}
        color={"secondary"}
        sx={{ width: "220px" }}
        sx={{ backgroundColor: "#b08ff3" }}
      >
        Buscar
      </Button>
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
        rating={1}
        descreption={"Campanha - MG"}
      />
      <UserInformation
        name={"Yara Silvestre"}
        yearold={"20" + " anos"}
        picture={"https://github.com/YaraSilvst.png"}
        rating={3}
        descreption={"Tres Corações - MG"}
      />
      <UserInformation
        name={"Amanda Fernandes"}
        yearold={"19" + " anos"}
        picture={"#"}
        rating={3}
        descreption={"Campanha - MG"}
      />
      <UserInformation
        name={"Lucas Eduardo de Oliveira Santos"}
        yearold={"50" + " anos"}
        picture={"https://github.com/LucasSantus.png"}
        rating={5}
        descreption={"São Bento - MG"}
      />
    </div>
  );
}
{
  /* <UserInformation /> Carregar essa tag para mostrar os usuario */
}
// SafeEnvironment é aqui que esta localizado a minha string Ambiente Seguro
