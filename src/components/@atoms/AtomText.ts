import styled from "@emotion/styled";
import AtomProps from "./types";

const AtomText = styled.span<AtomProps>`
  color: ${(props) => props.color};
  ${(props) => props.customCSS}
`;
export default AtomText;
