import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
`;

export const Column = styled.div`
  flex: ${({ flex }) => flex || 1};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Wrapper = styled.div`
  max-width: 300px;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  line-height: 44px;
  margin-bottom: 20px;
  color: #ffffff;
`;

export const TitleLogin = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 8px;
  color: #ffffff;
`;

export const SubTitleLogin = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 35px;
  color: #ffffff;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

