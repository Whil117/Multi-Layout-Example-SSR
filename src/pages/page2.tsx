import type { NextPageFC } from "next";
import AtomText from "../components/@atoms/AtomText";

const Page2: NextPageFC = () => {
  return (
    <>
      <AtomText>THIS IS MY ABOUT PAGE</AtomText>
    </>
  );
};
Page2.layout = "public";
Page2.colors = "#4ba0d6";
export default Page2;
