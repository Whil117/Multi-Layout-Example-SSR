import type { NextPageFC } from "next";
import AtomText from "../components/@atoms/AtomText";

const Page3: NextPageFC = () => {
  return (
    <>
      <AtomText>THIS IS MY PRODUCTS PAGE</AtomText>
    </>
  );
};
Page3.layout = "public";
Page3.colors = "#ff0080";

export default Page3;
