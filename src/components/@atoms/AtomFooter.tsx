import { css } from "@emotion/react";
import { FC } from "react";
import AtomText from "./AtomText";
import AtomWrapper from "./AtomWrapper";

type Props = {};

const AtomFooter: FC<Props> = (props) => {
  return (
    <AtomWrapper
      customCSS={css`
        background-color: #121212;
      `}
    >
      <AtomText
        as="h2"
        color="white"
        customCSS={css`
          font-size: 1.2rem;
          padding: 10px;
        `}
      >
        Footer by Whil Inc.
      </AtomText>
    </AtomWrapper>
  );
};

export default AtomFooter;
