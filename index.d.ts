import { NextComponentType, NextPageContext } from "next";
import { AppInitialProps } from "next/app";
import { Router } from "next/router";
import { LayoutProps } from "./src/layout";

declare module "next" {
  import { NextPage } from "next";
  export declare type NextPageFCProps<T> = NextPage<T> & LayoutProps;
  export declare type NextPageFC = NextPage<any> & LayoutProps;
}

declare module "next/app" {
  export declare type AppPropsLayout<T = any> = AppInitialProps & {
    Component: NextComponentType<NextPageContext, any, T> & LayoutProps;
    router: Router;
    __N_SSG?: boolean | undefined;
    __N_SSP?: boolean | undefined;
  };
}
