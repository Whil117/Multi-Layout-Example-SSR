/* eslint-disable jsx-a11y/alt-text */
import type { NextPage } from "next";
import AtomFooter from "../components/@atoms/AtomFooter";
import AtomNavBar from "../components/@atoms/AtomNavbar";

const Home: NextPage = () => {
  return (
    <>
      <AtomNavBar />
      <AtomFooter />
    </>
  );
};

export default Home;
