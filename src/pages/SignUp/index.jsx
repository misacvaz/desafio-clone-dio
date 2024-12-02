import React from 'react';
import { useForm } from 'react-hook-form';
import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Column, Title, TitleLogin, Wrapper, SubTitleLogin, Row } from './styles';
import { api } from '../../Services/api';

const SignUp = () => {
  const navigate = useNavigate();
  
  const { control, handleSubmit, formState: { errors } } = useForm({
    revalidateMode: 'onChange',
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = async (formData) => {
    try {
      const { data } = await api.post('/users', formData);
      if (data.id) {
        alert('Conta criada com sucesso!');
        navigate('/login');
      }
    } catch (e) {
      alert('Erro ao criar conta, tente novamente.');
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais tecnologias e entrar
            mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        
        <Column>
          <Wrapper>
            <TitleLogin>Crie sua conta</TitleLogin>
            <SubTitleLogin>Faça o cadastro e make the change._</SubTitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                placeholder="Nome completo"
                leftIcon={<MdPerson />}
                name="name"
                control={control}
              />
              {errors.name && <span>Nome é obrigatório</span>}
              
              <Input
                placeholder="E-mail"
                leftIcon={<MdEmail />}
                name="email"
                control={control}
              />
              {errors.email && <span>E-mail é obrigatório</span>}
              
              <Input
                type="password"
                placeholder="Senha"
                leftIcon={<MdLock />}
                name="password"
                control={control}
              />
              {errors.password && <span>Senha é obrigatória</span>}
              
              <Button title="Cadastrar" $variant="secondary" type="submit" />
            </form>
            
            <Row>
              <Button title="Voltar ao Login" onClick={() => navigate('/login')} $variant="link" />
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { SignUp };
