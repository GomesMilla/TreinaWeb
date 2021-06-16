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

interface UserInformationProps {
  picture: string;
  name: string;
  yearold: number;
  rating: number;
  description?: string;
}

const UserInformation: React.FC<UserInformationProps> = ({
  name,
  picture,
  yearold,
  description,
  rating,
}) => {
  return (
    <UserInformationContainer>
      <AvatarStyled src={picture}>{name[0]}</AvatarStyled>
      <UserName>{name}</UserName>
      <YearsOld>{yearold}</YearsOld>
      <RatingStyled readOnly value={rating} />
      <UserDescription>{description}</UserDescription>
    </UserInformationContainer>
  );
};

export default UserInformation;

// const UserInformation: React.FC<UserInformationProps> = (props) => {
//   return (
//     <UserInformationContainer>
//       <AvatarStyled src={"https://github.com/GomesMilla.png"} />
//       <UserName>Camila Adriana</UserName>
//       <YearsOld>19 anos</YearsOld>
//       <RatingStyled readOnly value={2} />
//       <UserDescription>Campanha-MG</UserDescription>
//     </UserInformationContainer>
//   );
// };

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
