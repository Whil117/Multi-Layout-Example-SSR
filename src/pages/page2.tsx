import type { NextPage } from "next";
import AtomFooter from "../components/@atoms/AtomFooter";
import AtomNavBar from "../components/@atoms/AtomNavbar";
import AtomText from "../components/@atoms/AtomText";

const Page2: NextPage = () => {
  return (
    <>
      <AtomNavBar backgroundColor="#4ba0d6" />
      <AtomText>THIS IS MY ABOUT PAGE</AtomText>
      <AtomFooter />
    </>
  );
};

export default Page2;
