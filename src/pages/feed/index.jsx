import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Importar o useNavigate
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';
import { Header } from '../../components/Header';
import { Container, Column, Title, TitleHighlight } from './styled';

const Feed = () => {
  const navigate = useNavigate();  // Hook para navegação

  const initialCardsData = [
    {
      id: 'card-1',
      userName: 'Mizael Vaz',
      userImage: 'https://avatars.githubusercontent.com/u/61653883?s=400',
      postImage: 'https://github.com/misacvaz/CalculadoraReact/blob/main/src/views/Imagem%20colada.png?raw=true',
      likes: 120,
      content: 'Postando sobre React!',
    },
    {
      id: 'card-2',
      userName: 'Mizael Vaz',
      userImage: 'https://avatars.githubusercontent.com/u/61653883?s=400',
      postImage: 'https://github.com/misacvaz/CalculadoraReact/blob/main/src/views/Imagem%20colada.png?raw=true',
      likes: 98,
      content: 'Explorando o mundo do JavaScript!',
    },
  ];

  const initialRankingData = [
    {
      id: 'user-1',
      nome: 'Mizael Vaz',
      image: 'https://avatars.githubusercontent.com/u/61653883?s=400',
      percentual: 25,
    },
    {
      id: 'user-2',
      nome: 'Mizael Vaz',
      image: 'https://avatars.githubusercontent.com/u/61653883?s=400',
      percentual: 65,
    },
  ];

  const [cardsData, setCardsData] = useState(initialCardsData);
  const [rankingData, setRankingData] = useState(initialRankingData);

  const loadMoreCards = () => {
    const newCards = [
      {
        id: 'card-3',
        userName: 'Mizael Vaz',
        userImage: 'https://avatars.githubusercontent.com/u/61653883?s=400',
        postImage: 'https://github.com/misacvaz/CalculadoraReact/blob/main/src/views/Imagem%20colada.png?raw=true',
        likes: 145,
        content: 'Explorando o React Hooks!',
      },
      {
        id: 'card-4',
        userName: 'Mizael Vaz',
        userImage: 'https://avatars.githubusercontent.com/u/61653883?s=400',
        postImage: 'https://github.com/misacvaz/CalculadoraReact/blob/main/src/views/Imagem%20colada.png?raw=true',
        likes: 60,
        content: 'Aprendendo sobre Node.js!',
      },
    ];
    setCardsData(prevData => [...prevData, ...newCards]);
  };

  const loadMoreUsers = () => {
    const newUsers = [
      {
        id: 'user-3',
        nome: 'Mizael Vaz',
        image: 'https://avatars.githubusercontent.com/u/61653883?s=400',
        percentual: 55,
      },
      {
        id: 'user-4',
        nome: 'Mizael Vaz',
        image: 'https://avatars.githubusercontent.com/u/61653883?s=400',
        percentual: 75,
      },
    ];
    setRankingData(prevData => [...prevData, ...newUsers]);
  };

  // Função para simular sair do login e redirecionar para a página principal
  const handleLogout = () => {
    alert('Você foi desconectado!');
    // Redireciona para a página inicial
    navigate('/');
  };

  return (
    <>
      <Header autenticado={true} />
      <Container>
        <Column $flex={3}>
          <Title>Feed</Title>
          {cardsData.map(card => (
            <Card
              key={card.id}
              userName={card.userName}
              userImage={card.userImage}
              postImage={card.postImage}
              likes={card.likes}
              content={card.content}
            />
          ))}
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button onClick={loadMoreCards}>Carregar mais cards</button>
        </Column>
        <Column $flex={1}>
          <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
          {rankingData.map(user => (
            <UserInfo
              key={user.id}
              nome={user.nome}
              image={user.image}
              $percentual={user.percentual}
            />
          ))}
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button onClick={loadMoreUsers}>Carregar mais usuários</button>
        </Column>
      </Container>
      {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
      <button onClick={handleLogout}>Sair de Login</button>
    </>
  );
};

export { Feed };


