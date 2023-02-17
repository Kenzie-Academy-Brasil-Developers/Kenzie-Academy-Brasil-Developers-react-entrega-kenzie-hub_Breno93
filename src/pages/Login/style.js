import styled from "styled-components";

export const ContainerLogin = styled.div`
  background-color: var(--grey-4);
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const FormLogin = styled.form`
  max-width: 370px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const FormContent = styled.div`
  background-color: var(--grey-3);
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding: 42px 20px;
  border-radius: 4px;
  color: var(--grey-0);

  > h2 {
    justify-content: center;
    display: flex;
  }

  > a {
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    background: var(--grey-2);
    border: 1.2182px solid var(--grey-2);
    border-radius: 4px;

    color: var(--grey-0);
  }
`;

export const LogoImg = styled.img`
  display: block;
  max-width: 100%;
  margin: 0 auto;
`;
