import { FC, ReactNode } from "react";
import AtomFooter from "../../components/@atoms/AtomFooter";
import AtomNavBar from "../../components/@atoms/AtomNavbar";
import AtomWrapper from "../../components/@atoms/AtomWrapper";

type Props = {
  children?: ReactNode;
  colors?: string;
};

const LayoutPublic: FC<Props> = (props) => {
  console.log(props.colors);

  return (
    <AtomWrapper>
      <AtomNavBar backgroundColor={props.colors} />
      {props.children}
      <AtomFooter />
    </AtomWrapper>
  );
};

export default LayoutPublic;
