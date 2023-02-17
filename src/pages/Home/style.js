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
