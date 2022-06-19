/* eslint-disable jsx-a11y/alt-text */
import type { NextPageFC } from "next";
import AtomText from "../components/@atoms/AtomText";
import AtomWrapper from "../components/@atoms/AtomWrapper";

const Home: NextPageFC = () => {
  return (
    <AtomWrapper>
      <AtomText>THIS IS MY MAIN PAGE</AtomText>
    </AtomWrapper>
  );
};
Home.layout = "public";
// Home.colors = "yellow";

export default Home;
