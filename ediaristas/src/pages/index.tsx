import Head from "next/head";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import TextFieldMaask from "ui/components/inputs/TextFieldMask/TextFieldMask";
import { Button, Typography, Container } from "@material-ui/core";
import {
  FormElementsContainer,
  ProfissionaisPaper,
  ProfissionaisContainer,
} from "ui/styles/pages/index.style";

export default function Home() {
  return (
    <div>
      {/* O SafeEnvironment é o cadeado para sinalizar a proteção */}
      <SafeEnvironment />
      {/* Meu titulo e sobre titulo */}
      <PageTitle
        title={"Conheça nossos profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais de sua localidade"
        }
      />

      <Container>
        <FormElementsContainer>
          {/* Meu elemento de input que vai pegar a maskara, ou melhor o CEP */}
          <TextFieldMaask
            mask={"99.999-999"}
            label={"Digite seu CEP"}
            fullWidth
            variant={"outlined"}
          />
          <Typography color={"error"}>CEP Inválido</Typography>
          <Button
            variant={"contained"}
            color={"secondary"}
            sx={{ width: "220px" }}
          >
            Buscar
          </Button>
        </FormElementsContainer>

        <ProfissionaisPaper>
          {/* Aqui começa as infomações sobre os diaristas  */}
          <ProfissionaisContainer>
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
            {/* termina aqui */}
          </ProfissionaisContainer>
        </ProfissionaisPaper>
      </Container>
    </div>
  );
}
{
  /* <UserInformation /> Carregar essa tag para mostrar os usuario */
}
// SafeEnvironment é aqui que esta localizado a minha string Ambiente Seguro
