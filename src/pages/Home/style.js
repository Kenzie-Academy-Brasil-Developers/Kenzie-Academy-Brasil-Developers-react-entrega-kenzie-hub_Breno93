import styled from "styled-components";

export const BodyHome = styled.div`
  border-bottom: 1.5px solid var(--grey-2);
  width: 100vw;
  padding: 16px;
`;

export const HeaderHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1024px;
  width: 100%;
  padding: 20px;
  margin: 0 auto;
`;

export const SectionUserModule = styled.div`
  color: var(--grey-0);
  display: flex;
  justify-content: right;
  flex-direction: column;
  padding: 20px 8px;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 20px;

  gap: 12px;

  > span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: var(--grey-1);
  }
`;

export const SectionTecnologias = styled.div`
  color: var(--grey-0);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const DivTitleTecnologias = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 659px;

  margin-bottom: 28px;

  & h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
    color: var(--grey-0);
  }

  & button {
    /* grey-3 */

    background: #212529;
    border-radius: 4px;
    padding: 11px 12px;
    cursor: pointer;

    color: var(--grey-0);
    border: none;
  }
`;

export const DivUl = styled.ul`
  width: 296px;
  height: 416.37px;
  left: 12px;
  top: 276px;

  background: var(--grey-3);
  border-radius: 4px;
  width: 100%;
  max-width: 659px;

  height: max-content;
  padding: 20px 20px;

  & li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12.182px;

    width: 100%;
    max-width: 659px;
    height: 48.73px;

    background: var(--grey-4);
    border-radius: 4.06066px;

    margin: 0 auto;
    margin-bottom: 12px;

    cursor: pointer;

    & p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 14.2123px;
      line-height: 24px;

      color: var(--grey-0);
    }
  }
`;
