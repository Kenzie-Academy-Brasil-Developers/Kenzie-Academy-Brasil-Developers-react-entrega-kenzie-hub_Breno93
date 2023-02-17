import styled from "styled-components";

export const ImgLogo = styled.img`
  display: block;
  max-width: 100%;
`;

export const DivHeader = styled.div`
  display: flex;
  justify-content: space-between;

  > a {
    text-decoration: none;
    color: var(--grey-0);
  }
`;

export const ContainerRegister = styled.div`
  background-color: var(--grey-4);
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const FormRegister = styled.form`
  max-width: 370px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 25px;
`;

export const FormContent = styled.div`
  background-color: var(--grey-3);
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding: 42px 20px;
  border-radius: 4px;
  color: var(--grey-0);
  margin-bottom: 23px;

  > h3,
  p {
    justify-content: center;
    display: flex;
  }
`;
