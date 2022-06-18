/* eslint-disable jsx-a11y/alt-text */
import type { NextPage } from "next";
import AtomFooter from "../components/@atoms/AtomFooter";
import AtomNavBar from "../components/@atoms/AtomNavbar";
import AtomText from "../components/@atoms/AtomText";

const Home: NextPage = () => {
  return (
    <>
      <AtomNavBar />
      <AtomText>THIS IS MY MAIN PAGE</AtomText>
      <AtomFooter />
    </>
  );
};

export default Home;
