import styled from "@emotion/styled";
import AtomProps from "./types";

const AtomWrapper = styled.div<AtomProps>`
  ${(props) => props.customCSS}
`;
export default AtomWrapper;
