import { NextPageFC } from "next";
import AtomText from "../../components/@atoms/AtomText";
import AtomWrapper from "../../components/@atoms/AtomWrapper";

const Dashboard: NextPageFC = (props) => {
  return (
    <AtomWrapper>
      <AtomText>DASHBBOARD</AtomText>
    </AtomWrapper>
  );
};
Dashboard.layout = "admin";
export default Dashboard;
