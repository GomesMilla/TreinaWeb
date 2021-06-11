import { lightGreen } from "@material-ui/core/colors";
import React from "react";
import {
  UserInformationContainer,
  AvatarStyled,
  UserName,
  YearsOld,
  RatingStyled,
  UserDescription,
} from "./UserInformation.style";

const UserInformation = (props) => {
  return (
    <UserInformationContainer>
      <AvatarStyled src={"https://github.com/GomesMilla.png"} />
      <UserName>Camila Adriana</UserName>
      <YearsOld />
      <RatingStyled readOnly value={2} />
      <UserDescription />
    </UserInformationContainer>
  );
};

export default UserInformation;

// Tem duas opções para as estrelas a opção de dar nota e a opção de somente lightGreen, ou seja, mostrar a nota de cada

// Quando eu uso o RatingStyled sozinho é possivel colocar pontuação
// Mas quando é usado essa opção é somente para leitura =========>  " <RatingStyled readOnly />"
// const UserInformation = (props) => {
//   return (
//     <UserInformationContainer>
//       <AvatarStyled src={"https://github.com/GomesMilla.png"} />
//       <UserName>Akira</UserName>
//       <YearsOld />
//       <RatingStyled />
//       <UserDescription />
//     </UserInformationContainer>
//   );
// };
