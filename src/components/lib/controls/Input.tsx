import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { sizes } from "settings/fonts";

const sharedStyles = css`
  padding: 0.5rem;
  font-size: ${sizes.normal};
`;

export const TextInput = styled.input`
  ${sharedStyles}
`;

export const SelectInput = styled.select`
  ${sharedStyles};
  width: auto;
`;
