import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
//import { signup } from '../../pages/SignUp';

import { MdEmail, MdLock } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import { api } from '../../Services/api';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Container, Column, EsqueciText, CriarText,Title, TitleLogin, Row, Wrapper, SubTitleLogin } from './styles';
import { useNavigate } from 'react-router-dom';

const schema = yup.object({
  email: yup.string().email('E-mail não é valido').required('campo obrigatorio'),
  password: yup.string().min(3, 'No mínimo 3 caracterdes').required('campo obrigatorio'),
}).required();

const Login = () => {
  const navigate = useNavigate();

  const { control, handleSubmit, formState: { errors, isValid } } = useForm({
    resolver: yupResolver(schema),
    revalidateMode: 'onchange',
    mode: 'onChange', // Corrigido para 'onChange'
  });

  console.log(isValid, errors)

const onSubmit = async (formData) => {
  try {
    const { data } = await api.get("/users" , formData); // Certifique-se de que retorna a lista de usuários
    console.log('Dados retornados:', data);
   const user = data.find(user => user.email === formData.email && user.password === formData.password);

    if (user) {
     // localStorage.setItem('token', data.token);
      alert('Login realizado com sucesso!');
      navigate('/feed');
    } else {
      alert('Usuário ou senha inválidos.');
    }
  } catch (e) {
    console.error('Erro ao fazer login:', e);
    alert('Erro ao tentar fazer login. Tente novamente mais tarde.');
  }
};





  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominando as principais tecnologias e entrar
            mais rápido nas empresas mais desejadas
          </Title>
        </Column>

        <Column>
          <Wrapper>
            <TitleLogin>Faça o seu Cadastro</TitleLogin>
            <SubTitleLogin>Faça seu login e faça a diferença.</SubTitleLogin>



            
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email" control={control} errorMessagge={errors?.email?.message}/>
              {errors.email && <span>E-mail é obrigatório</span>}
              
              <Input type="password" placeholder="Senha" leftIcon={<MdLock />} name="password" control={control} errorMessagge={errors?.password?.message}/>
              {errors.password && <span>{errors.password.message}</span>}
              
              <Button title="Entrar" $variant="secondary" type="submit" disabled={!isValid} />
            </form>

            <Row>
              <EsqueciText>Esqueci minha Senha</EsqueciText>
              <CriarText title='Criar conta' onClick={() => navigate('/signup')} $variant="link">Criar Conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Login };
