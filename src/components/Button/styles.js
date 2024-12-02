import styled, { css } from 'styled-components';

export const ButtonConteiner = styled.button`
  background: #565656;
  border-radius: 22px;
  position: relative;
  color: #ffff;
  padding: 2px 12px;
  min-width: 120px;
  width: 100%;
  cursor: pointer; /* Garantindo que o ponteiro seja aplicado ao botão inteiro */

  ${({ $variant }) =>
    $variant !== 'primary' &&
    css`
      min-width: 167px;
      height: 33px;
      background: #e41050;

      &:hover {
        opacity: 0.6; /* Opacidade ao passar o mouse */
      }

      &::after {
        content: '';
        position: absolute;
        border: 1px solid #e41050;
        top: -5px;
        left: -6px;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        border-radius: 22px;
      }
    `}
`;








