import { FC, ReactNode } from "react";
import LayoutAdmin from "./admin";
import LayoutPublic from "./public";

const typeLayouts = (props: LayoutProps) => ({
  public: <LayoutPublic {...props}> {props.children} </LayoutPublic>,
  admin: <LayoutAdmin {...props}> {props.children} </LayoutAdmin>,
});

export type LayoutProps = {
  layout?: "public" | "admin";
  colors?: string;
  children?: ReactNode;
};

const Layout: FC<LayoutProps> = (props) => {
  const { layout } = props;
  const GetLayout = typeLayouts(props)[layout ?? "public"];
  return GetLayout;
};

export default Layout;
