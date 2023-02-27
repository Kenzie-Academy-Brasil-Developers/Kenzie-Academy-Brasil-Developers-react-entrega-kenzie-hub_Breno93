import styled from "styled-components";

export const FormModal = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 22px;

  width: 100%;
  max-width: 369px;
  height: 342px;

  background: var(--grey-3);
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  margin: 0 auto;
`;

export const DivTitleModal = styled.div`
  background: #343b41;
  border-radius: 3.20867px 3.20867px 0px 0px;

  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 369px;

  padding: 11px 16px;

  & p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 11.2304px;
    line-height: 19px;

    color: var(--grey-0);
  }

  & button {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 600;
    font-size: 12.8347px;
    line-height: 21px;
    background: none;
    border: none;
    color: var(--grey-1);

    cursor: pointer;
  }
`;

export const DivInput = styled.div`
  padding: 11px 16px;
  color: var(--grey-0);
  display: flex;
  flex-direction: column;
  gap: 16px;

  & input {
    font-family: "Inter";
    font-weight: 400;
    font-size: 16px;

    color: var(--grey-0);

    width: 260px;
  }
`;

export const SelectStyled = styled.select`
  width: 260px;
  height: 38.5px;
  padding: 0 12px;
  background: var(--grey-2);

  border: 0.9772px solid var(--grey-0);
  border-radius: 3.20867px;
  color: var(--grey-0);

  cursor: pointer;
`;

export const ButtonCadastrarTech = styled.button`
  width: 265px;
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

  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
`;

export const DivButtonsSalvarExcluir = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 263px;
  margin-left: 12px;
`;

export const ButtonSalvar = styled.button`
  width: 163.09px;
  height: 38.37px;

  background: #59323f;

  border: 1.2182px solid #59323f;
  border-radius: 4px;

  color: var(--grey-0);
`;

export const ButtonExcluir = styled.button`
  width: 78.35px;
  height: 38.37px;

  background: var(--grey-1);

  border: 1.2182px solid var(--grey-1);
  border-radius: 4px;
`;
