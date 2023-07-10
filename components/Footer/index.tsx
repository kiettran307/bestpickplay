import Image from "next/image";
import Link from "next/link";
import {
  RiFacebookCircleFill,
  RiInstagramLine,
  RiLinkedinBoxFill,
  RiMapPin2Fill,
  RiTwitterFill,
} from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { HiPhone } from "react-icons/hi";
const Footer = () => {
  return (
    <>
      <footer className="mt-8 lg:mt-16" data-wow-delay=".1s">
        <div className="container border-b border-b-[#CED2DA]">
          <div className="flex flex-col -mx-4 lg:flex-row">
            <div className="w-full pr-4 md:w-1/2 lg:w-4/12 xl:w-4/12">
              <div className="mb-12 pl-4 w-full lg:max-w-[316px] md:pl-0 lg:mb-16">
                <Link href="/" className="inline-block mb-6">
                  <Image
                    src="/images/logo-footer.png"
                    alt="logo"
                    className="w-full"
                    width={140}
                    height={30}
                  />
                </Link>
                <p className="mb-4 text-base font-light leading-relaxed text-black lg:mb-8 lg:text-lg">
                  Best Pick F&B is a company that specializes in producing and
                  selling high-quality food and beverage products to consumers
                </p>
                <div className="flex items-center">
                  <Link
                    href={"/"}
                    className="mr-6 text-2xl text-[#97A1AF] hover:text-primary"
                    aria-label="social-link"
                  >
                    <span>
                      <RiInstagramLine />
                    </span>
                  </Link>
                  <Link
                    href={"/"}
                    className="mr-6 text-2xl text-[#97A1AF] hover:text-primary"
                    aria-label="social-link"
                  >
                    <span>
                      <RiFacebookCircleFill />
                    </span>
                  </Link>
                  <Link
                    href={"/"}
                    className="mr-6 text-2xl text-[#97A1AF] hover:text-primary"
                    aria-label="social-link"
                  >
                    <span>
                      <RiTwitterFill />
                    </span>
                  </Link>
                  <Link
                    href={"/"}
                    className="mr-6 text-2xl text-[#97A1AF] hover:text-primary"
                    aria-label="social-link"
                  >
                    <span>
                      <RiLinkedinBoxFill />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="grid flex-1 grid-cols-1 gap-4 p-4 md:grid-cols-2 xl:grid-cols-4 lg:gap-6">
              {FOOTER_NAV.map((item, index) => (
                <div className="mb-4 lg:mb-16" key={index}>
                  <h2 className="mb-5 text-lg font-bold text-black ">
                    {item.title}
                  </h2>
                  <ul>
                    {item.submenus.map((nav, index) => (
                      <li key={index}>
                        <Link
                          href={nav.path || "/"}
                          className="flex flex-row items-center gap-1 mb-4 text-base font-light text-accent hover:text-primary"
                        >
                           {nav.icon &&  <i>{nav.icon}</i>}
                           <span>

                           {nav.title}
                           </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="p-4 lg:py-8 ">
          <div className="container flex flex-wrap items-center justify-between px-0 lg:flex-row ">
            <div className="text-accent">Copyright © 2023 Best Pick F&B</div>
            <div className="text-accent">Powered by Best Pick F&B</div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

interface FooterNavType {
  title: string;
  submenus: {
    icon?: JSX.Element;
    path?: string;
    title?: string;
  }[];
}

const FOOTER_NAV: FooterNavType[] = [
  {
    title: "About Us",
    submenus: [
      {
        title: "About",
        icon: null,
        path: "/",
      },
      {
        title: "Case Studies",
        icon: null,
        path: "/",
      },
      {
        title: "Features",
        icon: null,
        path: "/",
      },
      {
        title: "Reviews",
        icon: null,
        path: "/",
      },
      {
        title: "Updates",
        icon: null,
        path: "/",
      },
    ],
  },
  {
    title: "Our bussiness",
    submenus: [
      {
        title: "Careers",
        icon: null,
        path: "/",
      },
      {
        title: "News",
        icon: null,
        path: "/",
      },
      {
        title: "Blog",
        icon: null,
        path: "/",
      },
      {
        title: "Contact",
        icon: null,
        path: "/",
      },
    ],
  },
  {
    title: "Customer service",
    submenus: [
      {
        title: "Help Center",
        icon: null,
        path: "/",
      },
      {
        title: "Status",
        icon: null,
        path: "/",
      },
      {
        title: "Report a Bug",
        icon: null,
        path: "/",
      },
      {
        title: "Chat Support",
        icon: null,
        path: "/",
      },
    ],
  },
  {
    title: "Contact us",
    submenus: [
      {
        title: "bestpickfood@gmail.com",
        icon: <MdEmail />,
        path: "/",
      },
      {
        title: "032 535 9275",
        icon: <HiPhone />,
        path: "/",
      },
      {
        title: "891 HHT, District 7",
        icon: <RiMapPin2Fill />,
        path: "/",
      },
    ],
  },
];
