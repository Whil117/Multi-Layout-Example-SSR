import type { NextPage } from "next";
import AtomFooter from "../components/@atoms/AtomFooter";
import AtomNavBar from "../components/@atoms/AtomNavbar";
import AtomText from "../components/@atoms/AtomText";

const Page3: NextPage = () => {
  return (
    <>
      <AtomNavBar backgroundColor="#ff0080" />
      <AtomText>THIS IS MY PRODUCTS PAGE</AtomText>
      <AtomFooter />
    </>
  );
};

export default Page3;
