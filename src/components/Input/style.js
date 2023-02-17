import styled from "styled-components";

export const InputContent = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  gap: 16px;

  > input {
    height: 48px;

    background: var(--grey-2);

    border: 1px solid var(--grey-0);
    border-radius: 4px;
    padding: 10px 16px;
    color: var(--grey-0);

    font-family: "Inter";
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
  }
`;
