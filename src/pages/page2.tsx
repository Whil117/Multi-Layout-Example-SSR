import type { NextPage } from "next";
import AtomFooter from "../components/@atoms/AtomFooter";
import AtomNavBar from "../components/@atoms/AtomNavbar";

const Page2: NextPage = () => {
  return (
    <>
      <AtomNavBar backgroundColor="#4ba0d6" />
      <AtomFooter />
    </>
  );
};

export default Page2;
