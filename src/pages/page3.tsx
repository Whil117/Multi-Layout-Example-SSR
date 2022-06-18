import type { NextPage } from "next";
import AtomFooter from "../components/@atoms/AtomFooter";
import AtomNavBar from "../components/@atoms/AtomNavbar";

const Page3: NextPage = () => {
  return (
    <>
      <AtomNavBar backgroundColor="#ff0080" />
      <AtomFooter />
    </>
  );
};

export default Page3;
