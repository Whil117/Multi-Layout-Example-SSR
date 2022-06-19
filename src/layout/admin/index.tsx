import { FC, ReactNode } from "react";
import AtomWrapper from "../../components/@atoms/AtomWrapper";
import NavBarDashboard from "../../components/@atoms/dashboard";

type Props = {
  children?: ReactNode;
};

const LayoutAdmin: FC<Props> = (props) => {
  return (
    <AtomWrapper>
      <NavBarDashboard />
      {props.children}
    </AtomWrapper>
  );
};

export default LayoutAdmin;
