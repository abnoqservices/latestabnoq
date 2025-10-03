import Link from "next/link";
import classNames from "classnames";
import menuData from "@/data/header/navigation.json";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { usePathname } from "next/navigation";
import { convertToSlug } from "@/common/utils";

export default function Navigator({ disableSubmenu, className }) {
  const pathname = usePathname();

  function renderMenu() {
    return menuData.map((item, index) => {
      // ✅ HOME
      if (item.title === "Home") {
        return (
          <li
            key={index}
            className={`relative ${
              pathname === "/" || pathname.startsWith("/home")
                ? "active"
                : ""
            }`}
          >
            <Link href={process.env.PUBLIC_URL + item.to}>
              <span>{item.menuname}</span>
            </Link>
            {item.subMenu && (
              <ul>
                {item.subMenu.map((i, idx) => (
                  <li
                    key={idx}
                    className={`${pathname === i.to ? "active" : ""}`}
                  >
                    <Link href={i.to}>
                      <span>{i.menuname}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      }

      // ✅ SOLUTIONS
      if (item.title === "Solutions") {
        return (
          <li
            key={index}
            className={`${pathname.startsWith(item.to) ? "active" : ""}`}
          >
            <Link href={process.env.PUBLIC_URL + item.to}>
              <span>{item.title}</span>
            </Link>
            <div className="dropdown-menu -wide flex">
              <div className="left w-3/4 pr-[15px]">
                <div className="service-cate heading6">Build & Secure</div>
                <ul className="grid grid-cols-3 gap-5 gap-y-2.5 mt-2">
                  {item.subMenu.slice(0, 6).map((i, idx) => (
                    <li
                      key={idx}
                      className={`${pathname === i.to ? "active" : ""}`}
                    >
                      <Link
                        className="flex items-center gap-2"
                        href={process.env.PUBLIC_URL + "/[slug]"}
                        as={process.env.PUBLIC_URL + "/" + convertToSlug(i.title)}
                      >
                        <span
                          className={`${i.icon} text-blue text-2xl flex-shrink-0`}
                        ></span>
                        <span>{i.menuname}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="service-cate heading6 mt-5">
                  Grow & Innovate
                </div>
                <ul className="grid grid-cols-3 gap-5 gap-y-2.5 mt-2">
                  {item.subMenu.slice(6, 12).map((i, idx) => (
                    <li
                      key={idx}
                      className={`${pathname === i.to ? "active" : ""}`}
                    >
                      <Link
                        className="flex items-center gap-2"
                        href={process.env.PUBLIC_URL + "/[slug]"}
                        as={process.env.PUBLIC_URL + "/" + convertToSlug(i.title)}
                      >
                        <span
                          className={`${i.icon} text-blue text-2xl flex-shrink-0`}
                        ></span>
                        <span>{i.menuname}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right side info block */}
              <div className="right w-1/4 pl-[15px]">
                <div className="content bg-linear rounded-lg p-6">
                  <div className="heading6">Explore All Services</div>
                  <div className="caption1 text-surface1 mt-1">
                    Unlocking the Full Spectrum of IT Solutions and Business
                    Consulting for your needs
                  </div>
                  <Link
                    className="button-main text-button-sm mt-3"
                    href="/pages/contact-us"
                  >
                    Contact Now
                  </Link>

                  <div className="more-infor mt-8">
                    <div className="mail flex items-center">
                      <div className="caption1 pl-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          viewBox="0 0 256 256"
                          className="text-lg"
                        >
                          <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"></path>
                        </svg>{" "}
                        hello@abnoq.com
                      </div>
                    </div>

                    <div className="phone flex items-center mt-3">
                      <span className="w-6 h-6 bg-blue flex items-center justify-center rounded-full flex-shrink-0">
                        <Icon.Phone weight="fill" className="text-sm text-white" />
                      </span>
                      <a
                        href="tel:+919044799944"
                        className="text-title pl-2 normal-case"
                      >
                        +91-9044799944
                      </a>
                    </div>

                    {/* Social links */}
                   <div className="list-social flex items-center gap-2.5 mt-4">
                      <Link className="item rounded-full w-10 h-10 flex items-center justify-center bg-white text-surface1 hover:bg-black hover:text-white duration-300" href="https://www.facebook.com/abnoqservices" target="_blank">
                        <span className="icon-facebook text-base"></span>
                      </Link>
                      <Link className="item rounded-full w-10 h-10 flex items-center justify-center bg-white text-surface1 hover:bg-black hover:text-white duration-300" href="https://www.linkedin.com/company/abnoqservices" target="_blank">
                        <span className="icon-linkedin text-base"></span>
                      </Link>
                      <Link className="item rounded-full w-10 h-10 flex items-center justify-center bg-white text-surface1 hover:bg-black hover:text-white duration-300" href="https://x.com/abnoqservices" target="_blank">
                        <span className="icon-twitter text-base"></span>
                      </Link>
                      <Link className="item rounded-full w-10 h-10 flex items-center justify-center bg-white text-surface1 hover:bg-black hover:text-white duration-300" href="https://www.youtube.com/@abnoq" target="_blank">
                        <span className="icon-youtube text-base"></span>
                      </Link>
                      <Link className="item rounded-full w-10 h-10 flex items-center justify-center bg-white text-surface1 hover:bg-black hover:text-white duration-300" href="https://www.instagram.com/abnoqservices/" target="_blank">
                        <span className="icon-instagram text-sm"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        );
      }

      // ✅ PAGES
      if (item.title === "Pages") {
        return (
          <li
            key={index}
            className={`relative ${
              pathname.startsWith("/pages") ? "active" : ""
            }`}
          >
            <Link href={process.env.PUBLIC_URL + item.to}>
              <span>{item.title}</span>
            </Link>
            <ul className="dropdown-menu style-pages grid grid-cols-2 gap-5">
              {item.subMenu?.map((i, idx) => (
                <li
                  key={idx}
                  className={`${pathname.startsWith(i.to) ? "active" : ""}`}
                >
                  <Link href={i.to}>
                    <span>{i.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        );
      }

      // ✅ OTHER MENUS
      return (
        <li
          key={index}
          className={`relative ${
            pathname.startsWith(item.to) ? "active" : ""
          }`}
        >
          <Link href={process.env.PUBLIC_URL + item.to}>
            <span>{item.title}</span>
          </Link>
          {item.subMenu && item.subMenu.length > 0 && (
            <ul className="dropdown-menu">
              {item.subMenu.map((i, idx) => (
                <li
                  key={idx}
                  className={`${pathname.startsWith(i.to) ? "active" : ""}`}
                >
                  <Link href={i.to}>
                    <span>{i.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      );
    });
  }

  // ✅ Disable Submenu case
  if (disableSubmenu) {
    return (
      <div className={`navigator -off-submenu ${classNames(className)}`}>
        <ul>
          {menuData.map((item, index) => (
            <li key={index}>
              <Link href={process.env.PUBLIC_URL + item.to}>
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // ✅ Normal render
  return (
    <div className={`navigator ${classNames(className)}`}>
      <ul>{renderMenu()}</ul>
    </div>
  );
}

