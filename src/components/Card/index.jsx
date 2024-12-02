import { FiThumbsUp } from 'react-icons/fi';
import React from 'react';
import { 
  CardContainer,
  ImageBackground,
  Content,
  UserInfo,
  UserPicture,
  PostInfo,
  HasInfo,
} from './styles';

const Card = ({ userName, userImage, postImage, likes, content }) => {
  return (
    <CardContainer>
      <ImageBackground src={postImage} />
      <Content>
        <UserInfo>
          <UserPicture src={userImage} />
          <span>{userName}</span>
        </UserInfo>
        <PostInfo>
          <p>{content}</p>
        </PostInfo>
        <HasInfo>
          <span>{likes} Likes</span>
          <FiThumbsUp />
        </HasInfo>
      </Content>
    </CardContainer>
  );
};

export { Card };
