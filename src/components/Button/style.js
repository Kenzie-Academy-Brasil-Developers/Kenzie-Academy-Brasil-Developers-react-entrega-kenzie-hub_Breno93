import styled from "styled-components";

export const ButtonEntrar = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 4px;
  border: none;
  padding: 0px 22px;

  background-color: var(--color-primary);
  color: var(--grey-0);

  font-family: "Inter";
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;

  cursor: pointer;
`;

export const ButtonCadastrar = styled(ButtonEntrar)`
  background-color: var(--grey-1);
  color: var(--grey-0);
  width: 307px;
`;

export const ButtonSair = styled(ButtonEntrar)`
  background-color: var(--grey-1);
  color: var(--grey-0);
  width: max-content;
`;
