import React from 'react'

import { Container, NameText, Progress, UserPicture } from './styles';

const UserInfo = ({ nome, image, percentual = 0 }) => {
  return (
    <Container>
      <UserPicture src={image} alt={nome} />
      <div>
        <NameText>{nome}</NameText>
        <Progress percentual={percentual} />
      </div>
    </Container>
  );
}

export { UserInfo };
