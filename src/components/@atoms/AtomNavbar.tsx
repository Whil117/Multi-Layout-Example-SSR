/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { css } from "@emotion/react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import AtomText from "./AtomText";
import AtomWrapper from "./AtomWrapper";

type Props = {
  backgroundColor?: string;
};

//blue = #4ba0d6
//pink = #ff0080

const AtomNavBar: FC<Props> = (props) => {
  return (
    <>
      <AtomWrapper
        customCSS={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px;
          background-color: ${props.backgroundColor || "#00bf82"};
        `}
      >
        <AtomText
          as="h1"
          color="white"
          customCSS={css`
            font-size: 1rem;
            font-weight: bold;
          `}
        >
          Main Layout
        </AtomText>
      </AtomWrapper>
      <div className="relative bg-white">
        <div className=" mx-auto px-4 sm:px-6 max-h-40">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <span className="sr-only">Workflow</span>
                <Image
                  className="rounded-xl w-auto h-auto"
                  alt="XDDD"
                  src="https://media-exp2.licdn.com/dms/image/C4E03AQEPWWq5AfJaJg/profile-displayphoto-shrink_800_800/0/1652553874624?e=1660780800&v=beta&t=C-niMq0pATjNWjOnUk-Ps46OJESiWEYN-cdPDA-s27U"
                  width={80}
                  height={80}
                />
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                aria-expanded="false"
              >
                <span className="sr-only">Open menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <nav className="hidden md:flex space-x-10">
              {Options.map((option) => (
                <Link href={option.link} key={option.id} passHref>
                  <a>
                    <AtomText className="text-base font-medium text-gray-500 hover:text-gray-900">
                      {option.label}
                    </AtomText>
                  </a>
                </Link>
              ))}
            </nav>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <a
                href="#"
                className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
              >
                {" "}
                Sign in{" "}
              </a>
              <a
                href="#"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                {" "}
                Sign up{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Options = [
  {
    id: 1,
    label: "Home",
    value: "option1",
    link: "/",
  },
  {
    id: 2,
    label: "About",
    value: "option2",
    link: "/page2",
  },
  {
    id: 3,
    label: "Products",
    value: "option3",
    link: "/page3",
  },
  {
    id: 4,
    label: "Dashboard",
    value: "option4",
    link: "/dashboard",
  },
];

export default AtomNavBar;
