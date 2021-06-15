import { experimentalStyled as styled } from "@material-ui/core/styles";
import { Avatar, Rating } from "@material-ui/core";

export const UserInformationContainer = styled("div")`
  display: grid;
  grid-template-columns: 60px 1fr;
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    "avatar name"
    "avatar YearsOld"
    "avatar rating"
    "avatar description";

  background-color: ${({ theme }) => theme.palette.grey[50]};
  padding: ${({ theme }) => theme.spacing(3)};
  gap: ${({ theme }) => theme.spacing(0.5) + " " + theme.spacing(2)};
  /* espaço entre o avatar e as outras informações */
  align-items: center;
  /* Prestar atençao nas ordens dos elementos porque ele pode funcionar ou não */
`;

export const UserName = styled("div")`
  grid-area: name;
  font-weight: bolder;
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
`;

export const UserDescription = styled("div")`
  grid-area: description;
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
`;

export const AvatarStyled = styled(Avatar)`
  grid-area: avatar;
  width: 100%;
  height: initial;
  aspect-ratio: 1;
`;

export const RatingStyled = styled(Rating)`
  grid-area: rating;
  font-size: 14px;
`;

export const YearsOld = styled("div")`
  grid-area: YearsOld;
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
`;
